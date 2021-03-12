import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContarSilabasPageRoutingModule } from './contar-silabas-routing.module';

import { ContarSilabasPage } from './contar-silabas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContarSilabasPageRoutingModule
  ],
  declarations: [ContarSilabasPage]
})
export class ContarSilabasPageModule {}
