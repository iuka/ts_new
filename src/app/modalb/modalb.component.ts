import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-modalb',
  templateUrl: './modalb.component.html',
  styleUrls: ['./modalb.component.scss']
})
export class ModalbComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

}
