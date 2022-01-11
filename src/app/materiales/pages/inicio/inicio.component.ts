import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../shared/sidebar/sidebar.service';
import { ModalbComponent } from '../../../modalb/modalb.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  modalRef: MDBModalRef;
  opcion:number = 0;
  constructor(public sidebarservice: SidebarService,private modalService: MDBModalService) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
  openModalb() {
    this.modalRef = this.modalService.show(ModalbComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-full-height modal-right',
      containerClass: 'right',
      animated: true
    });
  }
  oupen(ruta){
    self.top.location.href = ruta;
  }
  
}
