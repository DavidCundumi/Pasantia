import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { InformativoComponent } from './pages/Informativo/Informativo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiciosConsultoriaComponent } from './pages/servicios-consultoria/servicios-consultoria.component';
import { ServiciosTributariosComponent } from './pages/servicios-tributarios/servicios-tributarios.component';
import { ServiciosFinancierosComponent } from './pages/servicios-financieros/servicios-financieros.component';
import { TemaInformativo1Component } from './pages/tema-informativo1/tema-informativo1.component';
import { TemaInformativo2Component } from './pages/tema-informativo2/tema-informativo2.component';
import { TemaInformativo3Component } from './pages/tema-informativo3/tema-informativo3.component';
import { ResenaComponent } from './pages/resena/resena.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AnfitrionaComponent } from './pages/anfitriona/anfitriona.component';
import { PoliticaDeDatosComponent } from './pages/politica-de-datos/politica-de-datos.component';
import { LoginComponent } from './pages/login/login.component';
import { DescargaDatosComponent } from './pages/descarga-datos/descarga-datos.component';




@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    InformativoComponent,
    ContactoComponent,
    ServiciosConsultoriaComponent,
    ServiciosTributariosComponent,
    ServiciosFinancierosComponent,
    TemaInformativo1Component,
    TemaInformativo2Component,
    TemaInformativo3Component,
    ResenaComponent,
    GaleriaComponent,
    AnfitrionaComponent,
    PoliticaDeDatosComponent,
    LoginComponent,
    DescargaDatosComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    InformativoComponent,
    ContactoComponent,
    ServiciosConsultoriaComponent,
    ServiciosFinancierosComponent,
    TemaInformativo1Component,
    TemaInformativo2Component,
    TemaInformativo3Component,
    GaleriaComponent,
    AnfitrionaComponent,
    ResenaComponent,
    PoliticaDeDatosComponent,
    LoginComponent,
    DescargaDatosComponent
  ]
})
export class GlobalModule { }
