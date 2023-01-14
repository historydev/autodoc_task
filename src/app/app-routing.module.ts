import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./components/news/news.component";
import {NewsSingleComponent} from "./components/news-single/news-single.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'AUTODOC.RU - Главная'
	},
	{
		path: 'news',
		component: NewsComponent,
		title: 'AUTODOC.RU - Все новости'
	},
	{
		path: 'news/:id',
		component: NewsSingleComponent,
		title: 'AUTODOC.RU - Новость'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
