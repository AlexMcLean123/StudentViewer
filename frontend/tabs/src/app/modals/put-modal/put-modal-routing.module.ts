import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutModalPage } from './put-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PutModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutModalPageRoutingModule {}
