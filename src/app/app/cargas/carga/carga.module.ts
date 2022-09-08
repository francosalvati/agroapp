import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaPageRoutingModule } from './carga-routing.module';

import { CargaPage } from './carga.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaPageRoutingModule,
    SharedModule
  ],
  declarations: [CargaPage]
})
export class CargaPageModule {}
