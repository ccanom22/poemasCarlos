import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarRimaPage } from './buscar-rima.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarRimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarRimaPageRoutingModule {}
