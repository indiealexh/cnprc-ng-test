import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';

/**
 * INSTRUCTIONS:
 * 
 * 1)
 * Using the provided documentation, retrive the name value from the JSON file 'assets/data.json'
 * And use it to replace the world property/variable
 *
 * https://angular.io/guide/http
 * 
 * 2) 
 * If you complete the above task with time to spare, please also create an intuitive UI that displays the name value as if it was the current active user of the application.
 * When the name is clicked a menu should drop down or open with a disabled logout button
 * 
 * https://material.angular.io/components/categories
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
