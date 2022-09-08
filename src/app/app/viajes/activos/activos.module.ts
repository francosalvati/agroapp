import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivosPageRoutingModule } from './activos-routing.module';

import { ActivosPage } from './activos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivosPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivosPage]
})
export class ActivosPageModule {}
