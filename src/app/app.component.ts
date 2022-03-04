import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
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
    trigger('helloThere', [
      transition(':enter', [
        query('div', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(2000, [
            animate(
              '1s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
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
