import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresardatosPageRoutingModule } from './ingresardatos-routing.module';

import { IngresardatosPage } from './ingresardatos.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresardatosPageRoutingModule,
    SharedModule,
    
  ],
  declarations: [IngresardatosPage]
})
export class IngresardatosPageModule {}
