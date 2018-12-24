import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailPhotoParams } from 'src/app/types/Navigation';

@Component({
  selector: 'app-detail-photo',
  templateUrl: './detail-photo.component.html',
  styleUrls: ['./detail-photo.component.scss']
})
export class DetailPhotoComponent implements OnInit {
  params_subscription: Subscription;
  photo_id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.params_subscription = this.route.params.subscribe((params: DetailPhotoParams) => {
      this.photo_id = params.photo;
    });
  }

}
