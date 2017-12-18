//Wizard form data class Starts
export class FormData {
    ciudad: string = '';
    edificio?: string = '';
    jornada: string = '';
    sistema: string = '';
    tamano: string = '';
    descripcion: string = '';
    direccion: string = '';
    vehiculos: Vehiculos[] = [];
    horario: Horario = new Horario;
    features: Caracteristicas[] = [];
    datosPersonales: DatosPersonales = new DatosPersonales;
    metodo: string = '';
    deposito: Deposito = new Deposito;
    giro: Giro = new Giro;

    clear() {
        this.ciudad = '';
        this.jornada = '';
        this.edificio = '';
        this.sistema = '';
        this.tamano = '';
        this.descripcion = '';
        this.direccion = '';
        this.vehiculos = [];
        this.horario = new Horario;
        this.features = [];
        this.datosPersonales = new DatosPersonales;
        this.metodo = '';
        this.deposito = new Deposito;
        this.giro = new Giro;
    }
}
//Wizard form data class Starts
export class DatosParqueadero {
    ciudad: string = '';
    edificio?: string = '';
    jornada: string = '';
    sistema: string = '';
    tamano: string = '';
    descripcion: string = '';
    direccion: string = '';
    vehiculos: Vehiculos[] = [];
    horario: Horario;
    features: Caracteristicas[] = [];
}

export class Vehiculos {
    id: number = 0;
    nombre: string = '';
    espacio: number = 0;
    precio: number = 0;
}

export class Horario {
    tipo: string = '';
    horaEntrada: string = '';
    horaSalida: string = '';
}

export class Caracteristicas {
    id: string = '';
    descripcion: string = '';
}
//Wizard form data class Ends

//Personal tab data class starts
export class DatosPersonales {
    nombre: string = '';
    apellido: string = '';
    email: string = '';
    telefono: string = '';
}

//Personal tab data class ends

//Bancario tab data class starts
export class DatosBancarios {
    metodo: string = '';
    deposito: Deposito;
    giro: Giro;
}

export class Giro {
    nombre: string = '';
    cedula: string = '';
}

export class Deposito {
    nombreEntidad: string = '';
    nombreTitular: string = '';
    tipoCuenta: string = '';
    numeroCuenta: string = '';
}
//Bancario tab data class Ends