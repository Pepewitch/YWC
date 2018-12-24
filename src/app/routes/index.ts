import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { DetailPhotoComponent } from '../views/detail-photo/detail-photo.component';
import { SearchComponent } from '../views/search/search.component';
import { ArticleComponent } from '../views/article/article.component';
import { ArticleContentComponent } from '../views/article/article-content/article-content.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'detail/:photo',
    component: DetailPhotoComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'article/:id',
    component: ArticleContentComponent,
  },
];
