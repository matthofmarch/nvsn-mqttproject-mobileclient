import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mqtt-inbox',
    loadChildren: () => import('./pages/mqtt-inbox/mqtt-inbox.module')
    .then( m => m.MqttInboxPageModule)
  },
  {
    path: 'temperature-chart',
    loadChildren: () => import('./pages/temperature-chart/temperature-chart.module')
    .then( m => m.TemperatureChartPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
