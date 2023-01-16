import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./components/news/news.component";
import {NewsDetailComponent} from "./components/news-detail/news-detail.component";

const routes: Routes = [
	// {
	// 	path: '',
	// 	component: HomeComponent,
	// 	title: 'AUTODOC.RU - Главная'
	// },
	{
		path: '',
		component: NewsComponent,
		title: 'AUTODOC.RU - Новости'
	},
	{
		path: 'news/:category/:name',
		component: NewsDetailComponent,
		title: 'AUTODOC.RU - Новость'
	},
	{
		path: '**',
		component: NewsComponent,
		title: 'AUTODOC.RU - Новости'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
