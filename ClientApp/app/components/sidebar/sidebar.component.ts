import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

//  isMobileMenu() {
//      if ($(window).width() > 991) {
//          return false;
//      }
//      return true;
//  };

}
