import { Component } from '@angular/core';
import { Lunch } from './lunch';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(http: Http){
  }
  title = 'app';
  http;
  lunches = [
    new Lunch("Caroline", 11, 1),
    new Lunch("Laura", 13, .5),
    new Lunch("Natasha", 12, .5)
  ];
  times = [
    11, 12, 13, 14
  ];

  getData() {
    this.http.get("http://localhost:61353/api/lunch").toPromise().then(lunches => this.lunches = lunches.json());
  }

  left(time) {
    return (100 / 4 * (time - 11)) + '%';
  }
  width(time) {
    return (100 / 4 * (time)) + '%';
  }
}
