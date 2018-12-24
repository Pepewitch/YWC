import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { DetailPhotoService } from 'src/app/services/detail-photo.service';

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
  images = [];
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private filter: FilterService,
    private detail: DetailPhotoService,
  ) {}

  ngOnInit() {
    let filterString = '';
    const f = { mood: '', tone: '', type: '', time: '', loc: '', camera: '' };
    for (const key in this.filter.mood) {
      if (this.filter.mood.hasOwnProperty(key)) {
        if (this.filter.mood[key]) {
          const element = this.filter.mood[key];
          this.mood.push(key);
          filterString += key + '//';
        }
      }
    }
    f.mood = filterString;
    filterString = '';
    for (const key in this.filter.tone) {
      if (this.filter.tone.hasOwnProperty(key)) {
        if (this.filter.tone[key]) {
          const element = this.filter.tone[key];
          this.tone.push(key);
          filterString += key + '//';
        }
      }
    }
    f.tone = filterString;
    filterString = '';
    for (const key in this.filter.type) {
      if (this.filter.type.hasOwnProperty(key)) {
        if (this.filter.type[key]) {
          const element = this.filter.type[key];
          this.type.push(key);
          filterString += key + '//';
        }
      }
    }
    f.type = filterString;
    filterString = '';
    for (const key in this.filter.time) {
      if (this.filter.time.hasOwnProperty(key)) {
        if (this.filter.time[key]) {
          const element = this.filter.time[key];
          this.time.push(key);
          filterString += key + '//';
        }
      }
    }
    f.time = filterString;
    filterString = '';
    this.camera = this.filter.camera;
    if (this.camera) {
      filterString += this.camera + '//';
    }
    f.camera = filterString;
    filterString = '';
    this.loc = this.filter.location;
    if (this.loc) {
      filterString += this.loc + '//';
    }
    f.loc = filterString;
    filterString = '';
    this.images = this.detail.getPhotoByFilter(f);
  }
  toDetail(photo) {
    this.router.navigate(['detail', photo.id]);
  }
}
