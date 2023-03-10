import {inject, Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {HttpService} from '../../http/http.service';
import {news_selectors} from '../../../state/news/selectors';
import {news_actions} from '../../../state/news/actions';
import {NewsSuccessResponseModel} from '../../../models/news/success_response';
import {NewsModel} from '../../../models/news/news';
import {Observable} from 'rxjs';
import {NewsItemModel} from '../../../models/news/item';
import {NewsAddModel} from '../../../models/news/add';

// Я не гений, но быстро учусь, на текущей работе не у кого учиться

@Injectable({
	providedIn: 'root'
})
export class NewsStateService {

	private readonly _store = inject(Store);

	private _news:NewsModel = {
		max_pages: new Observable<number>(),
		page: new Observable<number>(),
		items_per_page: new Observable<number>(),
		total_count: new Observable<number>(),
		news: new Observable<NewsItemModel[]>(),
		loading: new Observable<boolean>(),
		success: new Observable<boolean>(),
		error: new Observable<any>(),
	};

	constructor(
		private http: HttpService
	) {
		this._news.loading = this._store.pipe(select(news_selectors['Loading?']));
		this._news.news = this._store.pipe(select(news_selectors['Get List']));
		this._news.error = this._store.pipe(select(news_selectors['Error']));
		this._store.pipe(select(news_selectors['Max Pages'])).subscribe(console.log);
	}

	public items_per_page(count: number) {
		this._store.dispatch(news_actions['Items Per Page']({items_per_page: count}));
	}

	public req_list(): void {
		this._store.dispatch(news_actions['Req List']());
	}

	public add(data: NewsAddModel): void {
		this._store.dispatch(news_actions['Add News'](data));
	}

	public next_page(): void {
		this._store.dispatch(news_actions['Next Page']());
	}

	public get error(): Observable<any> | undefined {
		return this._news.error;
	}

	public get success(): Observable<boolean> {
		return this._news.success;
	}

	public get loading(): Observable<boolean> {
		return this._news.loading;
	}

	public get all(): Observable<NewsItemModel[]> {
		return this._news.news;
	}

	public request = (page: number, items_per_page: number): void => {
		const res = this.http.get<NewsSuccessResponseModel>(`https://webapi.autodoc.ru/api/news/${page}/${items_per_page}`);
		res.subscribe(data => {
			// @ts-ignore
			const news = data.news.filter(n => Object.keys(n).map(k => !!n[k].length));
			this._store.dispatch(news_actions['Res Success']({
				totalCount: data.totalCount,
				news
			}));
		}, error => {
			this._store.dispatch(news_actions['Res Failure']({error}));
		});
	}

	public init(): void {
		this._store.dispatch(news_actions['Init']());
	}

}
