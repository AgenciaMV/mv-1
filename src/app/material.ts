//Archivo asignados a elementos de Angular Material

import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';

import { NgModule } from "@angular/core";



@NgModule({
  imports: [MatButtonModule, MatBadgeModule,
  MatToolbarModule, MatIconModule, MatSlideToggleModule,
  MatCheckboxModule, MatInputModule, MatCardModule,
  MatDialogModule, MatProgressBarModule, MatSelectModule, MatMenuModule],

  exports: [MatButtonModule, MatBadgeModule,
  MatToolbarModule, MatIconModule, MatSlideToggleModule,
  MatCheckboxModule, MatInputModule, MatCardModule,
  MatDialogModule, MatProgressBarModule, MatSelectModule, MatMenuModule],
})
export class MaterialModule { }
