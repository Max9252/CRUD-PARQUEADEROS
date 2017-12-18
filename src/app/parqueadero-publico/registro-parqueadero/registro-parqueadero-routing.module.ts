import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroParqueaderoComponent } from "./registro-parqueadero.component";
import { PersonalComponent } from './personal/personal.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ResultComponent } from './result/result.component';
import { BancarioComponent } from './bancario/bancario.component';


const routes: Routes = [
  {
    path: '',
    component: RegistroParqueaderoComponent,
    data: {
      title: 'registro-parqueadero'
    },
    children: [
      {
        path: 'wizard',
        component: InformacionComponent,
        data: {
          title: 'Informacion'
        }
      },
      {
        path: 'personal',
        component: PersonalComponent,
        data: {
          title: 'Personal'
        }
      },
      {
        path: 'bancario',
        component: BancarioComponent,
        data: {
          title: 'Bancario'
        }
      },
      {
        path: 'result',
        component: ResultComponent,
        data: {
          title: 'Result'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroParqueaderoRoutingModule { }

export const routedComponents = [InformacionComponent];