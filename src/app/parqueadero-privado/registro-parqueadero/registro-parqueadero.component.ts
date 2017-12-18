import { Component, OnInit } from '@angular/core';
import { ParqueaderoPrivado } from './../../../models/parqueadero-privado';

@Component({
  selector: 'app-registro-parqueadero',
  templateUrl: './registro-parqueadero.component.html',
  styleUrls: ['./registro-parqueadero.component.scss']
})
export class RegistroParqueaderoComponent implements OnInit {

  parqueadero: ParqueaderoPrivado;

  constructor() { }

  ngOnInit() {
    $.getScript('./../assets/js/jquery.steps.min.js');
    $.getScript('./../assets/js/wizard-steps.js');

    this.parqueadero = {
      ciudad: '',
      direccion: '',
      edificio: ''
    };
  }
}
