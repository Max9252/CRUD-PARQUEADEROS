import { Injectable } from '@angular/core';

import { FormData, DatosParqueadero, DatosBancarios, DatosPersonales } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isInformacionFormValid: boolean = false;
    private isBancarioFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) {
    }
    //Get Personal Tab Data
    getDatosParqueadero(): DatosParqueadero {
        // Return the Personal data
        var informacion: DatosParqueadero = {
            ciudad: this.formData.ciudad,
            edificio: this.formData.edificio,
            jornada: this.formData.jornada,
            sistema: this.formData.sistema,
            tamano: this.formData.tamano,
            descripcion: this.formData.descripcion,
            direccion: this.formData.direccion,
            vehiculos: this.formData.vehiculos,
            horario: this.formData.horario,
            features: this.formData.features
        };
        return informacion;
    }

    //Set Personal Tab Data
    setDatosParqueadero(data: DatosParqueadero) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isInformacionFormValid = true;
        this.formData.ciudad = data.ciudad;
        this.formData.descripcion = data.descripcion;
        this.formData.jornada = data.jornada;
        this.formData.sistema = data.sistema;
        this.formData.tamano = data.tamano;
        this.formData.direccion = data.direccion;
        this.formData.vehiculos = data.vehiculos;

        this.workflowService.validateStep(STEPS.datos);
    }

    getDatosPersonales(): DatosPersonales {
        // Return the Personal data
        var informacion: DatosPersonales = {
            nombre: this.formData.datosPersonales.nombre,
            apellido: this.formData.datosPersonales.apellido,
            telefono: this.formData.datosPersonales.telefono,
            email: this.formData.datosPersonales.email
        };
        return informacion;
    }

    //Set Personal Tab Data
    setDatosPersonales(data: DatosPersonales) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isBancarioFormValid = true;
        this.formData.datosPersonales.nombre = data.nombre;
        this.formData.datosPersonales.apellido = data.apellido;
        this.formData.datosPersonales.telefono = data.telefono;
        this.formData.datosPersonales.email = data.email;
        this.workflowService.validateStep(STEPS.personal);
    }

    getDatosBancarios(): DatosBancarios {
        // Return the Personal data
        var informacion: DatosBancarios = {
            metodo: this.formData.metodo,
            deposito: this.formData.deposito,
            giro: this.formData.giro
        };
        return informacion;
    }

    //Set Personal Tab Data
    setDatosBancarios(data: DatosBancarios) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isBancarioFormValid = true;
        this.formData.metodo = data.metodo;
        this.formData.deposito = data.deposito;
        this.formData.giro =data.giro;
        this.workflowService.validateStep(STEPS.bancario);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isBancarioFormValid = this.isInformacionFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isBancarioFormValid &&
            this.isInformacionFormValid;
    }
}