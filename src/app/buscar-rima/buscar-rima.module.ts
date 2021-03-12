import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarRimaPageRoutingModule } from './buscar-rima-routing.module';

import { BuscarRimaPage } from './buscar-rima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BuscarRimaPageRoutingModule
  ],
  declarations: [BuscarRimaPage]
})
export class BuscarRimaPageModule {}
