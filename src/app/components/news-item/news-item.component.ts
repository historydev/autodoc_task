import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-news-item',
	templateUrl: './news-item.component.html',
	styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

	@Input() title: string = 'Mercedes-AMG SL63 Motorsport Collectors Edition выполнен в стиле автомобиля F1';
	@Input() sub_title: string = 'AUTODOC.RU';
	@Input() publishedDate: Date = new Date();
	@Input() avatar: string = 'https://www.land-cruiser.ru/uploads/profile/photo-34009.jpg';
	@Input() titleImageUrl: string = 'https://www.pngmart.com/files/4/Tesla-Transparent-PNG.png';
	@Input() url: string = 'avto-novosti/jaguar_i_pace';
	@Input() description: string = 'Компания Mercedes-AMG решила отпраздновать свое участие в F1 специальным выпуском SL63';
	@Input() button_text: string = 'Подробнее';
	@Input() categoryType: string = 'Авто-новости';

	constructor() {
	}


	ngOnInit(): void {

	}

}
