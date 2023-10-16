export class Cliente {
    nombre: string;
    correo: string;
    telefono: number;
    mensaje?: string;
    Servicio: string;
    anterioridad: string;
    proqueEligio: string;
    aceptarTerminos: string;
    constructor(nombre: string, correo: string, telefono: number, mensaje: string, Servicio: string, anterioridad: string, proqueEligio: string, aceptarTerminos: string) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.mensaje = mensaje;
        this.Servicio = Servicio;
        this.anterioridad = anterioridad;
        this.proqueEligio = proqueEligio;
        this.aceptarTerminos = aceptarTerminos;
    }
}