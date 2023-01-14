import {Component, OnInit} from '@angular/core';
import {faSquareFacebook} from "@fortawesome/free-brands-svg-icons";

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	private _icons = {
		faSquareFacebook
	}

	constructor() {}

	ngOnInit(): void {
	}

	public get icons() {
		return this._icons
	}

}
