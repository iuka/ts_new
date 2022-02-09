import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { AudiovisualesComponent } from './pages/audiovisuales/audiovisuales.component';
import { InformaticosComponent } from './pages/informaticos/informaticos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
const routes: Routes = [
{
  path:'',component:InicioComponent,
  children:[
    { path:'libros', component: LibrosComponent},
    { path:'audiovisuales', component: AudiovisualesComponent},
    { path:'informaticos', component: InformaticosComponent},
    {path:'**', redirectTo:'Inicio'},
  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialesRoutingModule { }
