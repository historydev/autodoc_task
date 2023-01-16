import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../services/http/http.service";
import {NewsItemDetailModel} from "../../models/news/item_detail";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
	selector: 'app-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {

	private _subs: Subscription[] = [];

	item?: NewsItemDetailModel;
	constructor(
		private http: HttpService,
		private route: ActivatedRoute
	) {

	}

	ngOnInit(): void {
		const router_sub = this.route.params.subscribe(params => {
			this.http.get<NewsItemDetailModel>(`https://webapi.autodoc.ru/api/news/item/${params['category'] + '/' + params['name']}`)
				.subscribe((res: NewsItemDetailModel) => this.item = res);
		});
		this._subs.push(router_sub);
	}

	ngOnDestroy() {
		this._subs.forEach(sub => sub.unsubscribe());
	}

}
