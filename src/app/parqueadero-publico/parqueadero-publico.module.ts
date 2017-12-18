import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParqueaderoPublicoRoutingModule } from "./parqueadero-publico-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatchHeightModule,
        ParqueaderoPublicoRoutingModule,
        NgbModule
    ],
    declarations: []
})
export class ParqueaderoPublicoModule { }
