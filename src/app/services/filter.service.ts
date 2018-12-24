import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  type = {
    portrait: false,
    landscape: false,
  };
  mood = {
    happy: false,
    sad: false,
    cloudy: false,
    rainy: false,
    snowy: false,
    lonely: false,
  };
  tone = {
    warm: false,
    cool: false,
    bw: false,
    contrast: false,
    saturate: false,
    film: false,
    street: false,
  };
  time = {
    day: false,
    night: false,
  };
  location = '';
  camera = '';
  constructor() {}
  clear() {
    this.type = {
      portrait: false,
      landscape: false,
    };
    this.mood = {
      happy: false,
      sad: false,
      cloudy: false,
      rainy: false,
      snowy: false,
      lonely: false,
    };
    this.tone = {
      warm: false,
      cool: false,
      bw: false,
      contrast: false,
      saturate: false,
      film: false,
      street: false,
    };
    this.time = {
      day: false,
      night: false,
    };
    this.location = '';
    this.camera = '';
  }
  setFilter(type, mood, tone, camera, time) {
    for (const key in type) {
      if (type.hasOwnProperty(key)) {
        const element = type[key];
        this.type[key] = element;
      }
    }
    for (const key in mood) {
      if (mood.hasOwnProperty(key)) {
        const element = mood[key];
        this.mood[key] = element;
      }
    }
    for (const key in tone) {
      if (tone.hasOwnProperty(key)) {
        const element = tone[key];
        this.tone[key] = element;
      }
    }
    for (const key in time) {
      if (time.hasOwnProperty(key)) {
        const element = time[key];
        this.time[key] = element;
      }
    }
    this.camera = camera;
  }
}
