import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../service/photo.service';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.css']
})
export class PhotoCreateComponent implements OnInit {
  successMessage: string;
  failMessage: string;
  constructor(private  photoService: PhotoService) { }

  ngOnInit() {
  }
  addPhoto(photoForm) {
    this.photoService.createPhoto(photoForm.value).subscribe(() => {
      this.successMessage = 'tao moi thanh cong';
    }, () => {
      this.failMessage = 'tao moi that bai';
    });
  }
}
