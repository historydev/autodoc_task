import {NewsItemModel} from "./item";

export interface NewsSuccessResponseModel {
	news: NewsItemModel[];
	totalCount: number;
}
