import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  productoForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private globalService: GlobalService) {
    this.productoForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }
  cargarDatos() {
    let datosUsuario = {
      usuario: this.productoForm.get('usuario')?.value,
      contraseña: this.productoForm.get('contraseña')?.value
    };
    let validarCampos = this.globalService.validarRegistro(datosUsuario);
    if (validarCampos) {
      let validarCamposregistro = this.globalService.validarCampoRegistro(datosUsuario);
      if (validarCamposregistro == 1) {
        alert("Por favor ingrese su usuario");
      } else if (validarCamposregistro == 2) {
        alert("Por favor ingrese su contraseña");
      } else if (validarCamposregistro == 3) {
        alert("Usuario incorrecto, por favor intentelo de nuevo");
      } else if (validarCamposregistro == 4) {
        alert("Contraseña incorrecta, por favor intentelo de nuevo");
      } else if (validarCamposregistro == 0) {
        alert("Datos cargados correctamente");
        this.productoForm.reset();
        this.router.navigate(['/admin/descargaDatos']);
      }
    } else {
      alert("Por favor ingrese su usuario y su contraseña");
    }
  }
}
