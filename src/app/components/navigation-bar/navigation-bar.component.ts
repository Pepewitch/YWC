import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  @ContentChild(TemplateRef) templateRef;
  @ContentChild('header') header: TemplateRef<any>;
  @Input() header_height: string | number;
  isMobile = false;
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {}
}
