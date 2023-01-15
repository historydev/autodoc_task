import {NewsItemModel} from "./item";
import {EntityState} from "@ngrx/entity";
import {Observable} from "rxjs";

export interface NewsModel {
	news: Observable<NewsItemModel[]>;
	curr_count: Observable<number>;
	items_per_page: Observable<number>;
	page: Observable<number>;
	total_count: Observable<number>;
	loading: Observable<boolean>;
	success: Observable<boolean>;
	error?: Observable<any>;
}

export interface NewsStateModel extends EntityState<NewsStateModel> {
	news: NewsItemModel[];
	curr_count: number;
	items_per_page: number;
	page: number;
	total_count: number;
	loading: boolean;
	success: boolean;
	error?: any;
}
