import {Component, Input, OnInit} from '@angular/core';
import {Upload} from '../upload.model';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: Upload;

  constructor() { }

  ngOnInit() {
  }
}
