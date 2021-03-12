import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contar-silabas',
    loadChildren: () => import('./contar-silabas/contar-silabas.module').then( m => m.ContarSilabasPageModule)
  },
  {
    path: 'comprobar-rimas',
    loadChildren: () => import('./comprobar-rimas/comprobar-rimas.module').then( m => m.ComprobarRimasPageModule)
  },
  {
    path: 'buscar-rima',
    loadChildren: () => import('./buscar-rima/buscar-rima.module').then( m => m.BuscarRimaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
