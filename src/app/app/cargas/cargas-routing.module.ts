import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargasPage } from './cargas.page';

const routes: Routes = [
  {
    path: '',
    component: CargasPage
  },
  {
    path: 'carga',
    loadChildren: () => import('./carga/carga.module').then( m => m.CargaPageModule)
  },
  {
    path: 'ofertar',
    loadChildren: () => import('./ofertar/ofertar.module').then( m => m.OfertarPageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargasPageRoutingModule {}
