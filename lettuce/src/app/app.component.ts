import { Component } from '@angular/core';
import { Lunch } from './lunch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lunches = [
    new Lunch("alicce", 11, 1, "#9EB25D"),
    new Lunch("alice", 13, .5, "#EBF9D1"),
    new Lunch("alicce", 12, .5, "#9EB25D")
  ];
  times = [
    11, 12, 13, 14
  ];
  left(time) {
    return (100 / 4 * (time - 11)) + '%';
  }
  width(time) {
    return (100 / 4 * (time)) + '%';
  }
}
