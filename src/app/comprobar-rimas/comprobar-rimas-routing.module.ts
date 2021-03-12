import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprobarRimasPage } from './comprobar-rimas.page';

const routes: Routes = [
  {
    path: '',
    component: ComprobarRimasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprobarRimasPageRoutingModule {}
