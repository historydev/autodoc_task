import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./components/news/news.component";
import {NewsDetailComponent} from "./components/news-detail/news-detail.component";
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
		component: NewsDetailComponent,
		title: 'AUTODOC.RU - Новость'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
