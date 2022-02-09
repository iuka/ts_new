import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialesRoutingModule } from './materiales-routing.module';
import { LibrosComponent } from './pages/libros/libros.component';
import { AudiovisualesComponent } from './pages/audiovisuales/audiovisuales.component';
import { InformaticosComponent } from './pages/informaticos/informaticos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 

@NgModule({
  declarations: [
    LibrosComponent,
    AudiovisualesComponent,
    InformaticosComponent,
    InicioComponent
   ],
  imports: [
    CommonModule,
    MaterialesRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    RouterModule

  ],
  exports:[]
})
export class MaterialesModule { }
