import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NewsState} from "./reducers";

const feature_selector = createFeatureSelector<NewsState>('s');
const news_selector = <T>(mapping: (state: NewsState) => T) => createSelector(feature_selector, mapping);


export const news_selectors = {
	"Loading?": news_selector((state) => state.loading),
}
