import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FilterService } from 'src/app/services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
})
export class FilterDialogComponent implements OnInit {
  landscape = false;
  portrait = false;
  isMobile = false;
  camera = '';
  day = false;
  night = false;
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
  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    breakpointObserver: BreakpointObserver,
    private filter: FilterService,
    private router: Router,
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}
  submit() {}
  selectAll(event) {
    const checked = event.checked;
    this.landscape = event.checked;
    this.portrait = event.checked;
    for (const key in this.mood) {
      if (this.mood.hasOwnProperty(key)) {
        this.mood[key] = checked;
      }
    }
    for (const key in this.tone) {
      if (this.tone.hasOwnProperty(key)) {
        this.tone[key] = checked;
      }
    }
  }
  search() {
    this.filter.setFilter(
      {
        portrait: this.portrait,
        landscape: this.landscape,
      },
      this.mood,
      this.tone,
      this.camera,
      {
        day: this.day,
        night: this.night
      }
    );
    this.router.navigate(['search']);
    this.onNoClick();
  }
}
