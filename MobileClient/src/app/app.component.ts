import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Temperature',
      url: 'temperature-chart',
      icon: 'thermometer'
    },
    {
      title: 'mqtt Inbox',
      url: 'mqtt-inbox',
      icon: 'thermometer'
    }
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //const path = window.location.pathname.split("/").reverse()[0];
    //if (path !== undefined) {
    //  this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase().endsWith(path.toLowerCase()));
    //}

    this.selectedIndex=1
  }
}
