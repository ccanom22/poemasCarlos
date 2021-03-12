import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContarSilabasPage } from './contar-silabas.page';

const routes: Routes = [
  {
    path: '',
    component: ContarSilabasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContarSilabasPageRoutingModule {}
