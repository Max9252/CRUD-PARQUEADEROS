import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'registro-parqueadero-publico',
    templateUrl: './registro-parqueadero.component.html',
    styleUrls: ['./registro-parqueadero.component.scss']
})

export class RegistroParqueaderoComponent implements OnInit {
    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.navigate(['parqueadero-publico/registro/wizard'], { skipLocationChange: true });
    }

}