import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UusiPageRoutingModule } from './uusi-routing.module';

import { UusiPage } from './uusi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UusiPageRoutingModule
  ],
  declarations: [UusiPage]
})
export class UusiPageModule {}
