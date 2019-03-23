import {Component, Input, OnInit} from '@angular/core';
import {CoopList} from './coop-list.model';

@Component({
  selector: 'app-coop-list',
  templateUrl: './coop-list.component.html',
  styleUrls: ['./coop-list.component.css']
})
export class CoopListComponent implements OnInit {

  @Input() coop: CoopList;

  constructor() {
  }

  ngOnInit() {
  }

}
