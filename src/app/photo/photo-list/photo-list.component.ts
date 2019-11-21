import {Component, OnInit} from '@angular/core';
import {Photo} from '../../interface/photo';
import {PhotoService} from '../../service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photoList: Photo[] = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit() {
    this.photoService.getAllPhoto().subscribe(result => {
      this.photoList = result;
    });
  }

}
