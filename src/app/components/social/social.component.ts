import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }


  private http = new XMLHttpRequest();
  private url = 'http://api.linkpreview.net/?key=1806effcb3f1d442e629816fbcc24462&q=https://www.twitter.com/ssjono';

  ngOnInit() {
  }

  callApi() {
    this.http.open('GET', this.url);
    this.http.send();
    this.http.onreadystatechange = (e) => {
      console.log(this.http.responseText);
    };
  }


}
