import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UusiPage } from './uusi.page';

const routes: Routes = [
  {
    path: '',
    component: UusiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UusiPageRoutingModule {}
