import {createAction, props} from '@ngrx/store';
import {NewsRequestModel} from "../../models/news/request";
import {NewsFailureResponseModel} from "../../models/news/failure_response";
import {NewsSuccessResponseModel} from "../../models/news/success_response";
import {NewsRequestDetailModel} from "../../models/news/request_detail";
import {NewsModel} from "../../models/news/news";

// Export const for fixed name in imports
export const news_actions = {
	"Init": createAction('[AUTODOC NEWS/API] Init News', props<NewsModel>),
	"Req List": createAction('[AUTODOC NEWS/API] Request News', props<NewsRequestModel>()),
	"Req Detail": createAction('[AUTODOC NEWS/API] Request Detail News', props<NewsRequestDetailModel>()),
	"Res Success": createAction('[AUTODOC NEWS/API] Success Response News', props<NewsSuccessResponseModel>()),
	"Res Failure": createAction('[AUTODOC NEWS/API] Failure Response News', props<NewsFailureResponseModel>()),
}
