import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { ParqueaderoPrivadoRoutingModule } from './parqueadero-privado-routing.module';
import { RegistroParqueaderoComponent } from './registro-parqueadero/registro-parqueadero.component';

@NgModule({
    imports: [
        CommonModule,
        ParqueaderoPrivadoRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatchHeightModule
    ],
    declarations: [
        RegistroParqueaderoComponent
    ]
})
export class ParqueaderoPrivadoModule { }
