import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprobarRimasPageRoutingModule } from './comprobar-rimas-routing.module';

import { ComprobarRimasPage } from './comprobar-rimas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComprobarRimasPageRoutingModule
  ],
  declarations: [ComprobarRimasPage]
})
export class ComprobarRimasPageModule {}
