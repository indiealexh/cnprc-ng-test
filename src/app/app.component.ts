import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { animate, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';

/**
 * Using the provided documentation, retrive the name value from the JSON file 'assets/data.json'
 * And use it to replace the world property/variable
 *
 * https://angular.io/guide/http
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
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
