import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './global/pages/inicio/inicio.component';
import { NosotrosComponent } from './global/pages/nosotros/nosotros.component';
import { ServiciosComponent } from './global/pages/servicios/servicios.component';
import { ContactoComponent } from './global/pages/contacto/contacto.component';
import { InformativoComponent } from './global/pages/Informativo/Informativo.component';
import { ServiciosConsultoriaComponent } from './global/pages/servicios-consultoria/servicios-consultoria.component';
import { ServiciosTributariosComponent } from './global/pages/servicios-tributarios/servicios-tributarios.component';
import { ServiciosFinancierosComponent } from './global/pages/servicios-financieros/servicios-financieros.component';
import { TemaInformativo1Component } from './global/pages/tema-informativo1/tema-informativo1.component';
import { TemaInformativo2Component } from './global/pages/tema-informativo2/tema-informativo2.component';
import { TemaInformativo3Component } from './global/pages/tema-informativo3/tema-informativo3.component';
import { ResenaComponent } from './global/pages/resena/resena.component';
import { GaleriaComponent } from './global/pages/galeria/galeria.component';
import { AnfitrionaComponent } from './global/pages/anfitriona/anfitriona.component';
import { PoliticaDeDatosComponent } from './global/pages/politica-de-datos/politica-de-datos.component';
import { LoginComponent } from './global/pages/login/login.component';
import { DescargaDatosComponent } from './global/pages/descarga-datos/descarga-datos.component';


const rutas: Routes = [
  {
    path: "",
    component: InicioComponent,
    pathMatch: "full",
  },
  {
    path: "nosotros",
    component: NosotrosComponent,
  },
  {
    path: "servicios",
    component: ServiciosComponent,
  },
  {
    path: "contacto",
    component: ContactoComponent,
  },
  {
    path: "Información",
    component: InformativoComponent,
  },
  {
    path: "servicios/ServiciosConsultoria_Asesorias",
    component: ServiciosConsultoriaComponent
  },
  {
    path: "servicios/ServiciosTributarios",
    component: ServiciosTributariosComponent
  },
  {
    path: "servicios/ServiciosFinancieros",
    component: ServiciosFinancierosComponent
  },
  {
    path: "Información/TemaInformativo1",
    component: TemaInformativo1Component
  },
  {
    path: "Información/TemaInformativo2",
    component: TemaInformativo2Component
  },
  {
    path: "Información/TemaInformativo3",
    component: TemaInformativo3Component
  },
  {
    path: "ServiciosConsultoria_Asesorias",
    component: ServiciosConsultoriaComponent
  },
  {
    path: "ServiciosTributarios",
    component: ServiciosTributariosComponent
  },
  {
    path: "ServiciosFinancieros",
    component: ServiciosFinancierosComponent
  },
  {
    path: "TemaInformativo1",
    component: TemaInformativo1Component
  },
  {
    path: "TemaInformativo2",
    component: TemaInformativo2Component
  },
  {
    path: "TemaInformativo3",
    component: TemaInformativo3Component
  },
  {
    path: "Resena",
    component: ResenaComponent
  },
  {
    path: "Galeria",
    component: GaleriaComponent
  },
  {
    path: "Anfitriona",
    component: AnfitrionaComponent
  },
  {
    path: "contacto/PoliticaDeDatos",
    component: PoliticaDeDatosComponent
  },
  {
    path: "admin",
    component: LoginComponent
  },
  {
    path: "admin/descargaDatos",
    component: DescargaDatosComponent
  },
  {
    path: "**",
    redirectTo: ""
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
