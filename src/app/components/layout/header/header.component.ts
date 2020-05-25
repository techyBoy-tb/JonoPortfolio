import { Component, OnInit, Output, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sideNavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const pathName = window.location.pathname;
    // if (pathName === '/about-me' || pathName === '/') {
    //   document.getElementById('bioBtn').style.textDecoration = 'underline';
    // }
  }

  public onToggleSidenav = () => {
    this.sideNavToggle.emit();
  }

}
