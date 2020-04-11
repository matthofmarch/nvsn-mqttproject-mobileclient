import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MqttInboxPageRoutingModule } from './mqtt-inbox-routing.module';

import { MqttInboxPage } from './mqtt-inbox.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MqttInboxPageRoutingModule
  ],
  declarations: [MqttInboxPage]
})
export class MqttInboxPageModule {}
