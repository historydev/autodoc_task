import { NgModule } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
	imports: [
		MatCardModule,
		MatButtonModule,
		MatDialogModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatDialogModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
	],
})
export class AppMaterialModule { }
