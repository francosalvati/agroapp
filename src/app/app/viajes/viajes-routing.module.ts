import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesPage } from './viajes.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesPage,
  },
  {
    path: 'activos',
    loadChildren: () => import('./activos/activos.module').then( m => m.ActivosPageModule)
  },
  {
    path:'publicar',
    loadChildren: () => import('./activos/generar-carga/generar-carga.module').then( m => m.GenerarCargaPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesPageRoutingModule {}
