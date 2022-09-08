import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarCargaPageRoutingModule } from './generar-carga-routing.module';

import { GenerarCargaPage } from './generar-carga.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarCargaPageRoutingModule,
    SharedModule
  ],
  declarations: [GenerarCargaPage]
})
export class GenerarCargaPageModule {}
