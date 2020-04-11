import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import 'chartjs-plugin-zoom'
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '51.136.13.51',
  port: 8000,
  protocol: 'ws',
  //hostname: 'test.mosquitto.org',
  //hostname: 'localhost',
  //port: 8080,
  path: '/mqtt'
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
