import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  productoForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private globalService: GlobalService) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      mensaje: [''],
      Servicio: ['', Validators.required],
      anterioridad: ['', Validators.required],
      proqueEligio: ['', Validators.required],
      aceptarTerminos: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }



  agregarProducto() {
    const usuario: Cliente = {
      nombre: this.productoForm.get('nombre')?.value,
      correo: this.productoForm.get('correo')?.value,
      telefono: this.productoForm.get('telefono')?.value,
      mensaje: this.productoForm.get('mensaje')?.value,
      Servicio: this.productoForm.get('Servicio')?.value,
      anterioridad: this.productoForm.get('anterioridad')?.value,
      proqueEligio: this.productoForm.get('proqueEligio')?.value,
      aceptarTerminos: this.productoForm.get('aceptarTerminos')?.value,
    }
    let validarFormulario = this.globalService.validarFormularioGeneral(usuario);
    if (validarFormulario) {
      let validarCampos = this.globalService.validarCampos(usuario);
      if (validarCampos == 1) {
        alert("Por favor ingrese su nombre.");
      } else if (validarCampos == 2) {
        alert("Por favor ingrese su correo.");
      } else if (validarCampos == 2.1) {
        this.productoForm.get('correo')?.reset();
        alert("Por favor ingrese un correo valido.");
      } else if (validarCampos == 3) {
        alert("Por favor ingrese su numero celular.");
      } else if (validarCampos == 3.1) {
        alert("Por favor ingrese un numero de celular valido.");
        this.productoForm.get('telefono')?.reset();
      } else if (validarCampos == 4) {
        alert("Por favor elija cual es el servicio que necesita para solucionar su problemática.");
      } else if (validarCampos == 5) {
        alert("Por favor indíquenos si es o no es la primera vez que utiliza nuestros servicios.");
      } else if (validarCampos == 6) {
        alert("Por favor indíquenos porque nos eligió para darle solución a su problemática.");
      } else if (validarCampos == 7) {
        alert("Por favor acepte nuestra política de datos.");
      } else if (validarCampos == 0) {
        let validacion = this.globalService.validarCorreo(usuario)
        if (validacion) {
          alert('El correo que ingreso ya habia sido registrado.');
        } else {
          this.globalService.agregarUsuario(usuario);
          this.globalService.getCrearUsuario(usuario);
          this.productoForm.reset();
          this.globalService.guardarLocalStore();
          alert("Sus datos fueron cargados exitosamente a la base de datos.");
          this.router.navigate(['/']);
        }
      }
    } else {
      alert("Por favor ingrese los datos en el formulario, a excepción del mensaje ya que es opcional.");
    }
  }
}
