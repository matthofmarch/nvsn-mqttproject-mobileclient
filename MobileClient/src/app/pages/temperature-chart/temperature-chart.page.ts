import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';


interface ITelemetry{
  time: Date
  value: number
}

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.page.html',
  styleUrls: ['./temperature-chart.page.scss'],
})
export class TemperatureChartPage{
  someRequestUrl = "localhost:8020/sensors/office/temperatursensor0815/2/between?startTime=2013-05-18&endTime=2020-12-30"

  sensorTopic="sensors/temperature/1"

  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  chartType: ChartType = 'line';
  chartLegend = true;
  chartPlugins = [];

  public chartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Messdaten sensor 1' },
  ];



  constructor(private activatedRoute:ActivatedRoute,
    private httpClient:HttpClient) { 
    this.httpClient.get<ITelemetry[]>(this.someRequestUrl)
    .subscribe(x => {
      this.chartLabels = x.map(x => x.time.toString())
      this.chartData.push({data: x.map(x=>x.value), label: 'Some telemetry'})
    })
  }

  ngOnInit() {
    
  }

  onChangeSensor(topic: string){
  
    this.chartData = []
    //Change the sensor an the corresponding data
  }

}

