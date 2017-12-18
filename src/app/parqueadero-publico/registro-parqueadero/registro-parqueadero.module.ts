import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RegistroParqueaderoRoutingModule } from './registro-parqueadero-routing.module';

/* App Root */
import { RegistroParqueaderoComponent } from './registro-parqueadero.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { InformacionComponent } from './informacion/informacion.component';
import { ResultComponent } from './result/result.component';

/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { PersonalComponent } from './personal/personal.component';
import { BancarioComponent } from 'app/parqueadero-publico/registro-parqueadero/bancario/bancario.component';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        RegistroParqueaderoRoutingModule
    ],
    providers: [{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [RegistroParqueaderoComponent, NavbarComponent, InformacionComponent, ResultComponent, PersonalComponent, BancarioComponent],
    bootstrap: [RegistroParqueaderoComponent]

})

export class RegistroParqueaderoModule { }