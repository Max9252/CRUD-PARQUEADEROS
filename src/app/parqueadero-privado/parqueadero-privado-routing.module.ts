import { RegistroParqueaderoComponent } from './registro-parqueadero/registro-parqueadero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'registro',
                component: RegistroParqueaderoComponent,
                data: {
                    title: 'Registro Parqueadero Privado'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ParqueaderoPrivadoRoutingModule { }
