export interface NewsItemModel {
	id: number;
	title: string;
	description: string;
	publishedDate: Date;
	url: string;
	fullUrl: string;
	titleImageUrl: string;
	categoryType: string;
	custom?: boolean;
}
