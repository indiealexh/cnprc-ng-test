import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Using the provided documentation, retrive the name value from the JSON file 'assets/data.json'
 * And use it to replace the world property/variable
 *
 * https://angular.io/tutorial/toh-pt6#heroes-and-http
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jsonUrl: string = 'assets/data.json';

  world: string = 'world';

  constructor() {}

  ngOnInit(): void {
    // This runs on component load
  }
}

export interface Data {
  name: string;
}
