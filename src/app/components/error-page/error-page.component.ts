import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  private router: RouterLink;
  constructor() { }

  ngOnInit(): void {
  }

  button() {
    console.log('thing', );
  }

}
