import { Component, OnInit, Output, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  @Output() public sideNavToggle = new EventEmitter();
  constructor() { }
  private thingy = ['books', 'about', 'contact', 'social', 'exerpt', 'blog'];

  ngOnInit(): void {
    // document.getElementById('navbar').setEv
    // document.getElementById('navbar').addEventListener('click', (event) => );
  }

  ngAfterContentInit() {
    // document.getElementById('navbar').addEventListener('click', (event: MouseEvent) => {
    //   this.doSomething(document.location.pathname);
    // });
    // document.getElementById('homeLogo').addEventListener('click', (event: MouseEvent) => {
    //   this.doSomething(null);
    // });
  }

  public onToggleSidenav = () => {
    this.sideNavToggle.emit();
  }

  // private doSomething(url: string) {
  //   const page = url !== null ? url.split('/')[1] : null;
  //   console.log('page', page);
  //   // this.resetAll();
  //   if (page !== null) {
  //     this.active = true;
  //   }
  // }
  // private resetAll() {
  //   // tslint:disable-next-line: forin
  //   for (const thing in this.thingy) {
  //     this.thingy[thing] = false;
  //   }
  // }

}
