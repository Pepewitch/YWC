import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationBarService } from './services/navigation-bar.service';
import { SidenavItem } from './types/Navigation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sidenav_items: SidenavItem[];
  constructor(
    private navigation: NavigationBarService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/baseline-menu-24px.svg',
      ),
    );
    iconRegistry.addSvgIcon(
      'clear',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/baseline-clear-24px.svg',
      ),
    );
    iconRegistry.addSvgIcon(
      'info',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/baseline-info-24px.svg',
      ),
    );
    iconRegistry.addSvgIcon(
      'setting',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/baseline-settings-20px.svg',
      ),
    );
    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/location.svg'),
    );
    iconRegistry.addSvgIcon(
      'eye',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/baseline-remove_red_eye-24px.svg',
      ),
    );
    iconRegistry.addSvgIcon(
      'like',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/baseline-thumb_up_alt-24px.svg',
      ),
    );
    iconRegistry.addSvgIcon(
      'checked',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/checked.svg'),
    );
  }
  ngOnInit() {
    this.sidenav_items = this.navigation.getSidenavItems();
  }
}
