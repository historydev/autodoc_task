import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.scss']
})
export class AddNewsFormComponent {

	news_form = new FormGroup({
		title: new FormControl(''),
		titleImageUrl: new FormControl(''),
		description: new FormControl(''),
		categoryType: new FormControl(''),
	})

	constructor(public dialogRef: MatDialogRef<AddNewsFormComponent>,) {

	}

	public on_submit() {
		if(this.news_form.valid) this.add();
	}

	public add() {
		this.dialogRef.close(this.news_form.value)
	}

	public onNoClick(): void {
		this.dialogRef.close();
	}

}
