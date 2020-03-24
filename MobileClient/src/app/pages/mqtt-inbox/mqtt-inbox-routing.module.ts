import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MqttInboxPage } from './mqtt-inbox.page';

const routes: Routes = [
  {
    path: '',
    component: MqttInboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MqttInboxPageRoutingModule {}
