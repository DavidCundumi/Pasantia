import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Cliente } from 'src/app/models/cliente';
import * as fs from 'fs';
@Component({
  selector: 'app-descarga-datos',
  templateUrl: './descarga-datos.component.html',
  styleUrls: ['./descarga-datos.component.css']
})
export class DescargaDatosComponent {

  constructor(private servicios: GlobalService) { }

  descargarDatos() {
    let miArray: Cliente[] = [];
    miArray = this.servicios.datosUsuario();

    // Crear una función para convertir cada objeto en una representación de cadena personalizada
    function objetoACadena(cliente: Cliente): string {
      return ` Nombre: ${cliente.nombre}\n Correo: ${cliente.correo}\n Teléfono: ${cliente.telefono}\n Mensaje: ${cliente.mensaje}\n Servicio: ${cliente.Servicio}\n anterioridad: ${cliente.anterioridad}\n ProqueEligio: ${cliente.proqueEligio}\n AceptarTerminos: ${cliente.aceptarTerminos}\n`;
    }

    // Convertir cada objeto en una cadena personalizada y unirlos con saltos de línea
    const contenidoArchivo = miArray.map(objetoACadena).join('\n');

    const nombreArchivo = 'ReporteDeDatos.txt';

    // Crear un objeto Blob con el contenido del archivo
    const blob = new Blob([contenidoArchivo], { type: 'text/plain' });

    // Crear un enlace de descarga
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = URL.createObjectURL(blob);
    enlaceDescarga.download = nombreArchivo;

    // Simular un clic en el enlace para descargar el archivo
    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
  }
}