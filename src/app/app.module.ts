import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsComponent} from './components/news/news.component';
import {NewsDetailComponent} from './components/news-detail/news-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from "./services/http/http.service";
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LogoComponent} from './components/logo/logo.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NewsItemComponent} from './components/news-item/news-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from "./app.material.module";
import {FormsModule} from "@angular/forms";
import LocaleRu from '@angular/common/locales/ru';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import store_config from './state/config.json';
import {StoreModule} from "@ngrx/store";
import news_reducer from "./state/news/reducers";
import {FullRouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {AddNewsFormComponent} from "./components/add-news-form/add-news-form.component";
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(LocaleRu)

@NgModule({
	declarations: [
		AppComponent,
		NewsComponent,
		NewsDetailComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		LogoComponent,
		NavigationComponent,
		NewsItemComponent,
		AddNewsFormComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule,
		BrowserAnimationsModule,
		AppMaterialModule,
		StoreModule.forRoot({}),
		StoreModule.forFeature(store_config.key, news_reducer),
		StoreRouterConnectingModule.forRoot({
			serializer: FullRouterStateSerializer,
		}),
		NgOptimizedImage,
		ReactiveFormsModule
	],
	providers: [
		HttpService,
		{
			provide: LOCALE_ID,
			useValue: 'ru'
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
