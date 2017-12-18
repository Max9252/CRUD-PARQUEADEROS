import { Component, OnInit } from '@angular/core';

import { DatosBancarios } from './../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mt-wizard-bancario',
    templateUrl: './bancario.component.html',
    styleUrls: ['./bancario.component.scss']
})

export class BancarioComponent implements OnInit {

    title = 'Datos bancarios.';
    bancario: DatosBancarios;
    form: any;

    constructor(private router: Router,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.bancario = this.formDataService.getDatosBancarios();
    }

    //Save button event Starts
    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setDatosBancarios(this.bancario);

        let firstState = this.workflowService.getFirstInvalidStep(STEPS.result);
        if (firstState.length > 0) {
        };
        this.router.navigateByUrl('/parqueadero-publico/registro/result', { relativeTo: this.route.parent, skipLocationChange: true });
    }

    cancel() {
        this.router.navigate(['personal'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Save button event Ends
}
