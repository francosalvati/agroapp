import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage,
    children:[
      {
        path: 'cargas',
        loadChildren: () => import('./cargas/cargas.module').then( m => m.CargasPageModule)
      },
      {
        path:'',
        redirectTo:'cargas',
        pathMatch:"full"
      },
      {
        path: 'viajes',
        loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
      },
      {
        path: 'credito',
        loadChildren: () => import('./credito/credito.module').then( m => m.CreditoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}
