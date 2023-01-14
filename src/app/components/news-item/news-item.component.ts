import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-news-item',
	templateUrl: './news-item.component.html',
	styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

	@Input() title: string = 'Mercedes-AMG SL63 Motorsport Collectors Edition выполнен в стиле автомобиля F1';
	@Input() sub_title: string = 'AUTODOC.RU';
	@Input() date: string = '00.00.0000';
	@Input() avatar: string = 'https://www.land-cruiser.ru/uploads/profile/photo-34009.jpg';
	@Input() img: string = 'https://www.pngmart.com/files/4/Tesla-Transparent-PNG.png';
	@Input() description: string = 'Компания Mercedes-AMG решила отпраздновать свое участие в F1 специальным выпуском SL63';
	@Input() button_text: string = 'Подробнее';

	constructor() {
	}

	ngOnInit(): void {
	}

}
