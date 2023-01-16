import {createAction, props} from '@ngrx/store';
import {NewsFailureResponseModel} from '../../models/news/failure_response';
import {NewsSuccessResponseModel} from '../../models/news/success_response';
import {NewsAddModel} from '../../models/news/add';
import NewsItemsPerPageModel from '../../models/news/items_per_page';

// Export const for fixed name in imports
export const news_actions = {
	'Init': createAction('[AUTODOC NEWS/API] Init News'),
	'Req List': createAction('[AUTODOC NEWS/API] Request News'),
	'Next Page': createAction('[AUTODOC NEWS/API] Request News Next Page'),
	'Items Per Page': createAction('[AUTODOC NEWS/API] Set Items Per Page', props<NewsItemsPerPageModel>()),
	'Max Pages': createAction('[AUTODOC NEWS/API] Calculate Max Pages like total_count/items_per_page'),
	'Add News': createAction('[AUTODOC NEWS/API] Add News', props<NewsAddModel>()),
	// 'Req Detail': createAction('[AUTODOC NEWS/API] Request Detail News', props<NewsRequestDetailModel>()),
	'Res Success': createAction('[AUTODOC NEWS/API] Success Response News', props<NewsSuccessResponseModel>()),
	'Res Failure': createAction('[AUTODOC NEWS/API] Failure Response News', props<NewsFailureResponseModel>()),
}
