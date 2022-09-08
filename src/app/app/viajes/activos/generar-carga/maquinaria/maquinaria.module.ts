import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaquinariaPageRoutingModule } from './maquinaria-routing.module';

import { MaquinariaPage } from './maquinaria.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaquinariaPageRoutingModule,
    SharedModule
  ],
  declarations: [MaquinariaPage]
})
export class MaquinariaPageModule {}
