import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  mood = [];
  tone = [];
  type = [];
  time = [];
  loc = '';
  camera = '';
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private filter: FilterService,
  ) {}

  ngOnInit() {
    console.log(this.filter.mood);
    for (const key in this.filter.mood) {
      if (this.filter.mood.hasOwnProperty(key)) {
        if (this.filter.mood[key]) {
          const element = this.filter.mood[key];
          this.mood.push(key);
        }
      }
    }
    for (const key in this.filter.tone) {
      if (this.filter.tone.hasOwnProperty(key)) {
        if (this.filter.tone[key]) {
          const element = this.filter.tone[key];
          this.tone.push(key);
        }
      }
    }
    for (const key in this.filter.type) {
      if (this.filter.type.hasOwnProperty(key)) {
        if (this.filter.type[key]) {
          const element = this.filter.type[key];
          this.type.push(key);
        }
      }
    }
    for (const key in this.filter.time) {
      if (this.filter.time.hasOwnProperty(key)) {
        if (this.filter.time[key]) {
          const element = this.filter.time[key];
          this.time.push(key);
        }
      }
    }
    this.camera = this.filter.camera;
    this.loc = this.filter.location;
  }
}
