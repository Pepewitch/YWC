import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { FilterDialogComponent } from 'src/app/components/filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, public dialog: MatDialog) {}

  ngOnInit() {
    this.title.setTitle('YWC');
  }
  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      panelClass: 'full-width-dialog',
    });
  }
}
