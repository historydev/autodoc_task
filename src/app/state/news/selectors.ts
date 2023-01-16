import {createFeatureSelector, createSelector} from '@ngrx/store';
import store_config from '../config.json';
import {NewsStateModel} from '../../models/news/news';

const feature_selector = createFeatureSelector<NewsStateModel>(store_config.key);
const news_selector = <T>(mapping: (state: NewsStateModel) => T) => createSelector(feature_selector, mapping);

export const news_selectors = {
	'State': news_selector((state) => state),
	'Loading?': news_selector((state) => state.loading),
	'Get List': news_selector((state) => state.news),
	'Page': news_selector((state) => state.page),
	'Max Pages': news_selector((state) => state.max_pages),
	'Items Per Page': news_selector((state) => state.items_per_page),
	'Error': news_selector((state) => state.error),
}
