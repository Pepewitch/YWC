import { Injectable } from '@angular/core';
import { SidenavItem } from '../types/Navigation';

@Injectable({
  providedIn: 'root',
})
export class NavigationBarService {
  sidenav_items: SidenavItem[] = [
    {
      name: 'Home',
      link: '/',
      pathMatch: true
    },
    {
      name: 'Detail',
      link: '/detail/1',
      pathMatch: false
    }
  ];
  constructor() { }
  getSidenavItems() {
    return this.sidenav_items;
  }
}
