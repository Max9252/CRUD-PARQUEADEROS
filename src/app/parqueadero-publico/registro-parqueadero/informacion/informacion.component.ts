import { Component, OnInit } from '@angular/core';

import { DatosParqueadero, Vehiculos } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mt-wizard-datos-parqueadero',
    templateUrl: './informacion.component.html',
    styleUrls: ['./informacion.component.scss']
})

export class InformacionComponent implements OnInit {

    title = 'Informacion del parqueadero.';
    parqueadero: DatosParqueadero;
    features: any;
    vehiculos: any;
    form: any;

    constructor(private router: Router,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.parqueadero = this.formDataService.getDatosParqueadero();
        this.vehiculos = [
            {
                id: 1,
                nombre: "Automoviles",
                espacio: 0,
                precio: 0
            },
            {
                id: 2,
                nombre: "Bicicletas",
                espacio: 0,
                precio: 0
            },
            {
                id: 3,
                nombre: "Motocicletas",
                espacio: 0,
                precio: 0
            }
        ];
        this.features = [
            {
                id: "accessibility",
                descripcion: "Accesible para discapacitados"
            },
            {
                id: "camSecurity",
                descripcion: "Cámaras de seguridad"
            },
            {
                id: "covered",
                descripcion: "Parqueadero cubierto"
            },
            {
                id: "keyStorage",
                descripcion: "Se requiere dejar llaves"
            },
            {
                id: "security",
                descripcion: "Personal de seguridad"
            }];
    }

    onVehiculoToggle(idVehiculo: number, $event: any) {
        if ($event.target.checked) {
            this.parqueadero.vehiculos.push(this.vehiculos.find(vehiculo => vehiculo.id === idVehiculo));
        }
        else {
            var index = this.parqueadero.vehiculos.findIndex(vehiculo => vehiculo.id === idVehiculo);
            this.parqueadero.vehiculos.splice(index, 1);
        }
    }

    onCaracteristicasToggle(id: string, $event: any) {
        if ($event.target.checked) {
            this.parqueadero.features.push(this.features.find(caracteristica => caracteristica.id === id));
        }
        else {
            var index = this.parqueadero.features.findIndex(caracteristica => caracteristica.id === id);
            this.parqueadero.features.splice(index, 1);
        }
    }

    onEspacioChange(idVehiculo: number, $event: any) {
        console.log($event);
    }

    //Save button event Starts
    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setDatosParqueadero(this.parqueadero);

        let firstState = this.workflowService.getFirstInvalidStep(STEPS.personal);
        if (firstState.length > 0) {
        };
        this.router.navigateByUrl('/parqueadero-publico/registro/personal', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Save button event Ends
}
