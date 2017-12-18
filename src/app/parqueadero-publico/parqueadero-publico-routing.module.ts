import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'registro',
        loadChildren: './registro-parqueadero/registro-parqueadero.module#RegistroParqueaderoModule'
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderoPublicoRoutingModule { }
