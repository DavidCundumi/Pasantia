import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public arregloCliente: Cliente[] = [];
  constructor() {
    const datosDesdeLocalStorage = localStorage.getItem('datosClientes');
    if (datosDesdeLocalStorage) {
      const datosRecuperados = JSON.parse(datosDesdeLocalStorage);
      this.arregloCliente = datosRecuperados;
    }
  }
  datosUsuario(): Cliente[] {
    return this.arregloCliente;
  }
  agregarUsuario(cliente: Cliente) {
    this.arregloCliente.push(cliente);
    console.log(this.arregloCliente);
  }
  guardarLocalStore() {
    const datosParaGuardar = this.arregloCliente;
    const datosSerializados = JSON.stringify(datosParaGuardar);
    localStorage.setItem('datosClientes', datosSerializados);

  }
  validarcorreo2(cliente: Cliente): boolean {
    if (this.arregloCliente.includes(cliente)) {
      return true;
    } else {
      return false
    }
  }
  validarCorreo(cliente: Cliente): boolean {
    for (let clientes of this.arregloCliente) {
      if (clientes.correo == cliente.correo) {
        return true;
      }
    }
    return false;
  }
  validarFormularioGeneral(usuario: Cliente): boolean {
    if (usuario.nombre == '' && usuario.correo == '' && usuario.telefono < 1111111111 && usuario.mensaje == '' && usuario.Servicio == '' && usuario.anterioridad == '' && usuario.proqueEligio == '') {
      return false;
    } else {
      return true;
    }
  }
  validarCampos(usuario: Cliente): number {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(usuario.correo);
    if (usuario.nombre == '') {
      return 1;
    } else if (usuario.correo == '') {
      return 2;
    } else if (esValido == false) {
      return 2.1;
    } else if (String(usuario.telefono) == '') {
      return 3;
    } else if (usuario.telefono < 1111111111) {
      return 3.1;
    } else if (usuario.Servicio == '') {
      return 4;
    } else if (usuario.anterioridad == '') {
      return 5;
    } else if (usuario.proqueEligio == '') {
      return 6;
    } else if (usuario.aceptarTerminos == '') {
      return 7;
    }
    return 0;
  }
  validarCampoRegistro(datos: any): number {
    if (datos.usuario == '') {
      return 1;
    } else if (datos.contraseña == '') {
      return 2;
    }
    else if (datos.usuario != 'admin') {
      return 3;
    }
    else if (datos.contraseña != '123') {
      return 4;
    }
    return 0;
  }
  validarRegistro(datos: any): boolean {
    if (datos.usuario == '' && datos.contraseña == '') {
      return false;
    }
    return true;
  }

  getCrearUsuario(cliente: Cliente) {
    fetch('/api/v1/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cliente
      })
    })

  }

}