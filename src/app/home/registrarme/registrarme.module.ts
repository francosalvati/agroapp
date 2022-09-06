import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarmePageRoutingModule } from './registrarme-routing.module';

import { RegistrarmePage } from './registrarme.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarmePageRoutingModule,
    SharedModule
  ],
  declarations: [RegistrarmePage]
})
export class RegistrarmePageModule {}
