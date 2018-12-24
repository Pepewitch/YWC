import { Injectable } from '@angular/core';
import { DetailPhoto, Photographer } from '../types/Photo';

const photographer: { [key: string]: Photographer } = {
  Chim: {
    id: '1',
    firstname: 'Kulachet',
    lastname: 'Cheosakul',
    from: 'ILoveToGo.com',
  },
};

const photoList: DetailPhoto[] = [
  {
    id: '1',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['warm', 'film'],
    type: 'Portrait',
    mood: ['lonely'],
    time: 'day',
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '3',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['warm'],
    time: 'day',
    type: 'Portrait',
    mood: ['lonely', 'sad'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '4',
    extension: 'jpg',
    time: 'day',
    photographer: photographer['Chim'],
    tone: ['warm'],
    type: 'Portrait',
    mood: ['happy'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '5',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['cool'],
    type: 'Portrait',
    mood: ['happy', 'rainy', 'lonely'],
    time: 'day',
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '6',
    extension: 'jpg',
    time: 'day',
    photographer: photographer['Chim'],
    tone: ['film'],
    type: 'Portrait',
    mood: ['sad', 'lonely'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '7',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['warm'],
    type: 'Portrait',
    mood: ['happy'],
    time: 'day',
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '8',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['film'],
    time: 'day',
    type: 'Portrait',
    mood: ['happy'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '9',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['cool'],
    type: 'Portrait',
    mood: ['rainy', 'happy'],
    time: 'day',
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '10',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['cool', 'saturate'],
    type: 'Portrait',
    mood: ['happy', 'rainy', 'cloudy'],
    time: 'night',
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '11',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['film', 'street'],
    type: 'Portrait',
    mood: ['cloudy'],
    time: 'day',
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '12',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['cool', 'contrast', 'cool'],
    time: 'night',
    type: 'Portrait',
    mood: ['happy'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '13',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['film', 'warm'],
    time: 'day',
    type: 'Portrait',
    mood: ['happy'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '14',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['film', 'warm'],
    time: 'day',
    type: 'Portrait',
    mood: ['sad', 'lonely'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
  {
    id: '15',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['film', 'warm'],
    time: 'day',
    type: 'Portrait',
    mood: ['happy'],
    setting: {
      f: '1.8',
      focal: '55mm',
      iso: '200',
      ss: '1/600',
      wb: '3800',
    },
    like: 292,
    view: 3478,
  },
];

@Injectable({
  providedIn: 'root',
})
export class DetailPhotoService {
  constructor() {}
  getDetail(photoId: string) {
    const photo = photoList.find(e => e.id === photoId);
    return photo;
  }
  getPhotoByFilter(filter: string) {
    if (filter.length === 0) {
      return photoList;
    }
    const out = [];
    for (const i of photoList) {
      let check = false;
      if (filter.includes(i.time)) {
        check = true;
      }
      for (const mood of i.mood) {
        if (filter.includes(mood)) {
          check = true;
        }
      }
      for (const tone of i.tone) {
        if (filter.includes(tone)) {
          check = true;
        }
      }
      for (const type of i.type) {
        if (filter.includes(type)) {
          check = true;
        }
      }
    }
    return out;
  }
}
