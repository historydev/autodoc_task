import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsComponent} from './components/news/news.component';
import {NewsSingleComponent} from './components/news-single/news-single.component';
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
import {registerLocaleData} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

registerLocaleData(LocaleRu)

@NgModule({
	declarations: [
		AppComponent,
		NewsComponent,
		NewsSingleComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		LogoComponent,
		NavigationComponent,
		NewsItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule,
		BrowserAnimationsModule,
		AppMaterialModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule
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
