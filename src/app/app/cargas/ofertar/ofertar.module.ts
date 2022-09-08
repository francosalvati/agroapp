import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertarPageRoutingModule } from './ofertar-routing.module';

import { OfertarPage } from './ofertar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertarPageRoutingModule,
    SharedModule
  ],
  declarations: [OfertarPage]
})
export class OfertarPageModule {}
