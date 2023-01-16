import {inject, Injectable} from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import {news_actions} from "./actions";
import {NewsStateService} from "../../services/news/state-manager/news-mananger.service";
import {NewsModel, NewsStateModel} from "../../models/news/news";
import {Store} from "@ngrx/store";
import {news_selectors} from "./selectors";

@Injectable()
export class NewsEffects {

	private readonly actions$ = inject(Actions);

	readonly req_news$ = createEffect(() =>
		this.actions$
			.pipe(
				ofType(news_actions['Req List']),
				concatLatestFrom((action) => this._store.select(news_selectors['State'])),
				fetch({
					run: (action, state: NewsStateModel) => this.news_state_manager.request(state.page, state.items_per_page),
					onError: console.error,
				})
			)
	);

	readonly next_page$ = createEffect(() =>
		this.actions$
			.pipe(
				ofType(news_actions['Next Page']),
				fetch({
					run: (action, state: NewsStateModel) => {
						this._store.dispatch(news_actions['Req List']());
						this._store.dispatch(news_actions['Max Pages']());
					},
					onError: console.error,
				})
			)
	);

	constructor(
		private news_state_manager: NewsStateService,
		private _store: Store<NewsStateModel>
	) {

	}
}
