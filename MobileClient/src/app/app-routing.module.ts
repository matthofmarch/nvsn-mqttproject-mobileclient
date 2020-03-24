import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module')
    .then( m => m.FolderPageModule)
  },
  {
    path: 'pages/temperature-chart',
    loadChildren: () => import('./pages/temperature-chart/temperature-chart.module')
    
    .then( m => m.TemperatureChartPageModule)
    .finally(() => console.log("fnjkdn"))
  },  {
    path: 'mqtt-inbox',
    loadChildren: () => import('./pages/mqtt-inbox/mqtt-inbox.module').then( m => m.MqttInboxPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
