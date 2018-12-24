import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetailPhotoService } from 'src/app/services/detail-photo.service';
import {
  DetailPhotoParams,
  DetailPhoto,
  Photographer,
  Setting,
} from 'src/app/types/Photo';

@Component({
  selector: 'app-detail-photo',
  templateUrl: './detail-photo.component.html',
  styleUrls: ['./detail-photo.component.scss'],
})
export class DetailPhotoComponent implements OnInit {
  onRequest = false;
  params_subscription: Subscription;
  photo: DetailPhoto;
  photographer: Photographer;
  setting: Setting;
  tags: any;
  constructor(
    private route: ActivatedRoute,
    private detail: DetailPhotoService,
  ) {}

  ngOnInit() {
    this.onRequest = true;
    this.params_subscription = this.route.params
      .pipe(
        map((params: DetailPhotoParams) => {
          return this.detail.getDetail(params.photo);
        }),
      )
      .subscribe(detail => {
        if (detail) {
          this.photo = detail;
          this.photographer = detail.photographer;
          this.setting = detail.setting;
          this.tags = [...detail.tone, ...detail.mood];
        }
        this.onRequest = false;
      });
  }
}
