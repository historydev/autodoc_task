import {Component, OnInit} from '@angular/core';
import {NewsStateService} from "../../services/news-state-manager/news-mananger.service";
import {NewsItemModel} from "../../models/news/item";
import {MatDialog} from "@angular/material/dialog";
import {AddNewsFormComponent} from "../add-news-form/add-news-form.component";

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	public readonly news: NewsItemModel[] = [];
	public readonly loading = this.state_manager.loading;
	public readonly success = this.state_manager.success;
	public readonly error = this.state_manager.error;

	constructor(
		private state_manager: NewsStateService,
		private dialog: MatDialog
	) {
		this.state_manager.news.subscribe(n => {
			this.news.push(...n.filter((el: NewsItemModel) => !this.news.includes(el)))
		});
		state_manager.init();
		state_manager.request(1);
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
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`); // Pizza!
		});
	}

	private on_scroll = (e: Event) => {
		const item = document.body.querySelector('.news .list-elem:nth-last-child(1)');
		if(item) {
			const scroll_top = item.getBoundingClientRect().top;
			const w_scroll_top = window.scrollY;
			if(scroll_top <= 800) {
				this.state_manager.next_page();
				window.scrollTo(0, w_scroll_top)
			}
		}
	}

	ngOnInit(): void {
		window.onscroll = this.debounce(this.on_scroll);
	}

}
