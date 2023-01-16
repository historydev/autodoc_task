import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsStateService} from "../../services/news/state-manager/news-mananger.service";
import {NewsItemModel} from "../../models/news/item";
import {MatDialog} from "@angular/material/dialog";
import {AddNewsFormComponent} from "../add-news-form/add-news-form.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

	public readonly news: NewsItemModel[] = [];
	public readonly loading = this.news_state_manager.loading;
	public readonly success = this.news_state_manager.success;
	public readonly error = this.news_state_manager.error;

	private _subs: Subscription[] = []

	constructor(
		private news_state_manager: NewsStateService,
		private dialog: MatDialog,
		private snack: MatSnackBar
	) {
		const all_news = this.news_state_manager.all.subscribe(n => {
			const filtered = n.filter((el: NewsItemModel) => !this.news.includes(el));
			this.news.push(...filtered);
		});
		const news_error = this.error?.subscribe(err => {
			if(err) {
				snack.open('Ошибка при загрузке новостей :(', undefined, {
					duration: 99999,
					panelClass: 'error'
				})
			}
		});

		this._subs.push(all_news);

		if(news_error) {
			this._subs.push(news_error);
		}

		news_state_manager.init();
		news_state_manager.req_list();
	}

	private debounce(func: Function, timeout = 300) {
		let timer: any;
		return (...args: any) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	}

	public open_add_gialog(): void {
		const dialogRef = this.dialog.open(AddNewsFormComponent, {
			disableClose: true
		});
		const add_news_dialog = dialogRef.afterClosed().subscribe(result => {
			if(result) {
				const s = localStorage;
				const news_item = s.getItem('news');
				const news = [
					{
						...result,
						id: Math.floor(Math.random() * 99999),
						publishedDate: new Date(Date.now()),
						url: 'avto-novosti/jaguar_i_pace'
					}
				]

				if(!news_item) {
					s.setItem('news', JSON.stringify(news));
				} else {
					const s_news = JSON.parse(news_item);
					s_news.unshift(...news);
					s.setItem('news', JSON.stringify(s_news));
				}

				this.news.unshift(...news);

				this.news_state_manager.add({
					news
				});
			}
		});

		this._subs.push(add_news_dialog);
	}

	private on_scroll = (e: Event) => {
		const item = document.body.querySelector('.news .list-elem:nth-last-child(1)');
		if(item) {
			const scroll_top = item.getBoundingClientRect().top;
			const w_scroll_top = window.scrollY;
			if(scroll_top <= 800) {
				this.news_state_manager.next_page();
				window.scrollTo(0, w_scroll_top)
			}
		}
	}

	ngOnInit(): void {
		window.onscroll = this.debounce(this.on_scroll);
	}

	ngOnDestroy() {
		this._subs.forEach(sub => sub.unsubscribe());
	}

}
