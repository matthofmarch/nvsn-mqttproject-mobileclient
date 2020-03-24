import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'temperature-chart',
    loadChildren: () => import('./pages/temperature-chart/temperature-chart.module')
    .then( m => m.TemperatureChartPageModule)
  },
  {
    path: 'mqtt-inbox',
    loadChildren: () => import('./pages/mqtt-inbox/mqtt-inbox.module')
    .then( m => m.MqttInboxPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
