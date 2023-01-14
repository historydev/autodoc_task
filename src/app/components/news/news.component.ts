import {Component, inject, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {news_selectors} from "../../state/news/selectors";

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	private readonly store = inject(Store);

	constructor() {
	}

	ngOnInit(): void {
		this.store.pipe(select(news_selectors["Loading?"]))
	}

}
