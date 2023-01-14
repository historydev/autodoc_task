import {Component, OnInit} from '@angular/core';
import {faCog} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

	private readonly _icons = {
		faCog
	}

	constructor() {}

	ngOnInit(): void {
	}

	public get icons() {
		return this._icons
	}

}
