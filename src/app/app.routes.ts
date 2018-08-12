import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { CarrosComponent } from './components/carros/carros.component';
import { BienesRaicesComponent } from './components/bienes-raices/bienes-raices.component';
import { OtrosServiciosComponent } from './components/otros-servicios/otros-servicios.component';
import { EmpleoComponent } from './components/empleo/empleo.component';
import { PaginaComponent } from './components/pagina/pagina.component';
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



/* import { compileNgModuleFromRender2 } from '../../node_modules/@angular/compiler/src/render3/r3_module_compiler'; */



const APP_ROUTES: Routes = [
  { path: 'home',         component: HomeComponent },
  { path: 'perfil',       component: PerfilComponent },
  { path: 'notificacion', component: NotificacionComponent },
  { path: 'respuesta',    component: RespuestaComponent },
  { path: 'nosotros',     component: NosotrosComponent },
  { path: 'mensaje',      component: MensajeComponent },
  { path: 'carros',       component: CarrosComponent },
  { path: 'bienesRaices', component: BienesRaicesComponent },
  { path: 'otrosServicios', component: OtrosServiciosComponent },
  { path: 'empleo',       component: EmpleoComponent },
  { path: 'pagina',       component: PaginaComponent },
  { path: 'tiendas',      component: TiendasComponent },
  { path: 'recreaciones', component: RecreacionesComponent },
  { path: 'comidasBebidas', component: ComidasBebidasComponent },
  { path: 'transportes',  component: TransportesComponent },
  { path: 'profesiones',  component: ProfesionesComponent },
  { path: 'reparaciones', component: ReparacionesComponent },
  { path: 'deportes',     component: DeportesComponent },
  { path: 'educacion',    component: EducacionComponent },
  { path: 'hospedaje',    component: HospedajeComponent },
  { path: 'salud',        component: SaludComponent },
  { path: 'registro',     component: RegistroComponent },
  { path: 'login',        component: LoginComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



