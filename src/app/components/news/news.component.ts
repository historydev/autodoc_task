import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	private _grid_cols: number = 4;

	constructor() {
	}

	ngOnInit(): void {
	}

	public get grid_cols(): number {
		return this._grid_cols;
	}

	public set grid_cols(val: number) {
		this._grid_cols = val;
	}

	onResize(event: any): void {
		const w = event.target.innerWidth;
		const mobile = w <= 400;
		const tablet = w <= 1000;

		switch (true) {
		case mobile:
			this.grid_cols = 1;
			return;
		case tablet:
			this.grid_cols = 2;
			return;
		}

		return
	}

}
