import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutModalPageRoutingModule } from './put-modal-routing.module';

import { PutModalPage } from './put-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutModalPageRoutingModule
  ],
  declarations: [PutModalPage],
  exports:[PutModalPage]
})
export class PutModalPageModule {}
