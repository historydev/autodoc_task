import {NewsItemModel} from "./item";

export interface NewsModel {
	news: NewsItemModel[];
	curr_count: number;
	page: number;
	total_count: number;
	loaded: boolean;
	loading: boolean;
	success: boolean;
	error?: any;
}
