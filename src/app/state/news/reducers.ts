import {news_actions} from './actions'
import {EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {NewsStateModel} from "../../models/news/news";
import {Action, createReducer, on} from "@ngrx/store";
import {NewsSuccessResponseModel} from "../../models/news/success_response";
import {NewsFailureResponseModel} from "../../models/news/failure_response";
import {NewsAddModel} from "../../models/news/add";

export const adapter: EntityAdapter<NewsStateModel> = createEntityAdapter();

export const initial_news = {
	curr_count: 0,
	page: 1,
	items_per_page: 50,
	total_count: 0,
	news: [],
	loading: false,
	success: false,
	error: undefined,
};

const initial_news_state: NewsStateModel = adapter.getInitialState(initial_news);

const reducer = createReducer(
	initial_news_state,
	on(news_actions["Init"], () => ({
		...initial_news_state,
	})),
	on(news_actions["Req List"], (state: NewsStateModel) => ({
		...state,
		loading: true
	})),
	on(news_actions["Next Page"], (state: NewsStateModel) => ({
		...state,
		page: state.page+1,
		loading: true
	})),
	on(news_actions["Res Success"], (state: NewsStateModel, props: NewsSuccessResponseModel) => ({
			...state,
			news: [...state.news, ...props.news],
			total_count: props.totalCount,
			success: true,
			loading: false
	})),
	on(news_actions["Res Failure"], (state: NewsStateModel, props: NewsFailureResponseModel) => {
		return {
			...state,
			success: false,
			...props
		}
	}),
	on(news_actions["Add News"], (state: NewsStateModel, props: NewsAddModel) => {
		return {
			...state,
			news: [props, ...state.news]
		}
	}),
);

export default function news_reducer(state: NewsStateModel | undefined, action: Action) {
	return reducer(state, action);
}
