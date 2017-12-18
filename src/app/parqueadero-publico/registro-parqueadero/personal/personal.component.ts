import { Component, OnInit } from '@angular/core';

import { DatosPersonales } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mt-wizard-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})

export class PersonalComponent implements OnInit {

    title = 'Datos personales.';
    personal: DatosPersonales;
    form: any;

    constructor(private router: Router,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getDatosPersonales();
    }

    //Save button event Starts
    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setDatosPersonales(this.personal);

        let firstState = this.workflowService.getFirstInvalidStep(STEPS.personal);
        if (firstState.length > 0) {
        };
        this.router.navigateByUrl('/parqueadero-publico/registro/bancario', { relativeTo: this.route.parent, skipLocationChange: true });
    }

    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Save button event Ends
}
