import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http/http.service";
import {NewsSuccessResponseModel} from "../../models/news/success_response";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
