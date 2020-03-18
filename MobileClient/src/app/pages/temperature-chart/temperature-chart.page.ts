import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.page.html',
  styleUrls: ['./temperature-chart.page.scss'],
})
export class TemperatureChartPage implements OnInit {

  entries = []

  constructor(private activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.entries.push(
        {
          date: this.addHours(new Date(), i*24)

        }
      )
    }
  }

  addHours(date:Date, hours:number):Date{
    date.setHours(date.getHours()+hours)
    return date
  }
  
}

