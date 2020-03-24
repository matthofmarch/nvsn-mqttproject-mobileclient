import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.page.html',
  styleUrls: ['./temperature-chart.page.scss'],
})
export class TemperatureChartPage implements OnInit {

  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  chartType: ChartType = 'line';
  chartLegend = true;
  chartPlugins = [];

  public chartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {
    
  }

/*   addHours(date:Date, hours:number):Date{
    date.setHours(date.getHours()+hours)
    return date
  }
   */
}

