import {NewsItemModel} from "./item";

export interface NewsSuccessResponseModel {
	news: NewsItemModel[];
	totalCount: number;
	page: number;
	items_per_page: number;
}
