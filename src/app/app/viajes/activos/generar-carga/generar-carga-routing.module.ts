import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarCargaPage } from './generar-carga.page';


const routes: Routes = [
  {
    path: '',
    component: GenerarCargaPage,
    children: [
      {
        path: 'ingresardatos',
        loadChildren: () => import('./ingresardatos/ingresardatos.module').then(m => m.IngresardatosPageModule)
      },
      {
        path: '',
        redirectTo: 'ingresardatos',
        pathMatch: 'full'
      },
      {
        path: 'maquinaria',
        loadChildren: () => import('./maquinaria/maquinaria.module').then( m => m.MaquinariaPageModule)
      },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarCargaPageRoutingModule { }
