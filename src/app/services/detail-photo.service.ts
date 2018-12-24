import { Injectable } from '@angular/core';
import { DetailPhoto, Photographer } from '../types/Photo';

const photographer: { [key: string]: Photographer} = {
  'Chim': {
    id: '1',
    firstname: 'Kulachet',
    lastname: 'Cheosakul',
    from: 'ILoveToGo.com',
  }
};

const photoList: DetailPhoto[] = [
  {
    id: '1',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['warm'],
    type: 'Portrait',
    mood: [],
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
    id: '2',
    extension: 'jpg',
    photographer: photographer['Chim'],
    tone: ['cool'],
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
}
