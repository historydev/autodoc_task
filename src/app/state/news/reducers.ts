import {news_actions} from './actions'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {NewsModel} from "../../models/news/news";
import {Action, createReducer, on} from "@ngrx/store";

export interface NewsState extends EntityState<NewsModel> {
	loading: boolean;
}

export const adapter: EntityAdapter<NewsModel> = createEntityAdapter();

const initial_news_state: NewsState = adapter.getInitialState({
	loading: false
});

const reducer = createReducer(
	initial_news_state,
	on(news_actions["Init"], (state: NewsState) => ({
		...state,
		loading: true
	})),
);

export default function news_reducer(action: Action, state?: NewsState)  {
	return reducer(state, action);
}
