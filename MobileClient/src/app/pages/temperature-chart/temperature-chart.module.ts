import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperatureChartPageRoutingModule } from './temperature-chart-routing.module';

import { TemperatureChartPage } from './temperature-chart.page';

import { ChartsModule } from "ng2-charts";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperatureChartPageRoutingModule,
    ChartsModule
  ],
  declarations: [TemperatureChartPage]
})
export class TemperatureChartPageModule {}
