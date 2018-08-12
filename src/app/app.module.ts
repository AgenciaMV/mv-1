import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ANIMATIONS
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//MATERIAL
import { MaterialModule } from "./material";

//RUTAS
import {APP_ROUTING} from './app.routes';

//SERVICIOS


//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarrosComponent } from './components/carros/carros.component';
import { BienesRaicesComponent } from './components/bienes-raices/bienes-raices.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { EmpleoComponent } from './components/empleo/empleo.component';
import { OtrosServiciosComponent } from './components/otros-servicios/otros-servicios.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { RecreacionesComponent } from './components/recreaciones/recreaciones.component';
import { ComidasBebidasComponent } from './components/comidas-bebidas/comidas-bebidas.component';
import { TransportesComponent } from './components/transportes/transportes.component';
import { ProfesionesComponent } from './components/profesiones/profesiones.component';
import { ReparacionesComponent } from './components/reparaciones/reparaciones.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HospedajeComponent } from './components/hospedaje/hospedaje.component';
import { SaludComponent } from './components/salud/salud.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PerfilComponent,
    PaginaComponent,
    NotificacionComponent,
    RespuestaComponent,
    NosotrosComponent,
    CarrosComponent,
    BienesRaicesComponent,
    MensajeComponent,
    EmpleoComponent,
    OtrosServiciosComponent,
    TiendasComponent,
    RecreacionesComponent,
    ComidasBebidasComponent,
    TransportesComponent,
    ProfesionesComponent,
    ReparacionesComponent,
    DeportesComponent,
    EducacionComponent,
    HospedajeComponent,
    SaludComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
  	BrowserAnimationsModule,
    MaterialModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	//Definiciones



 }
