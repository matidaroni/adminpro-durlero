import { Component, OnInit } from '@angular/core';

declare function init_plugins();  // llamar funcion de javascript fuera de angular

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    init_plugins();
  }

}
