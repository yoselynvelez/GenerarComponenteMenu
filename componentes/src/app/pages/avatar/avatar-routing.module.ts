import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonModal, IonicModule } from '@ionic/angular';
import { AvatarPage } from './avatar.page';

const routes: Routes = [
  {
    path: '',
    component: AvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarPageRoutingModule { }
