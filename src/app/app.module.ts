import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ANIMATIONS
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//MATERIAL
import { MaterialModule } from "./material";

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	//Definiciones
	


 }
