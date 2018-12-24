import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { DetailPhotoComponent } from '../views/detail-photo/detail-photo.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'detail/:photo',
    component: DetailPhotoComponent
  }
];
