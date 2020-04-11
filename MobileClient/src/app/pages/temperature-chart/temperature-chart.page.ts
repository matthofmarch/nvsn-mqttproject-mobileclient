import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';


interface ITelemetry{
  time: string
  value: number
}

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.page.html',
  styleUrls: ['./temperature-chart.page.scss'],
})
export class TemperatureChartPage{
  baseUrl = "http://localhost:8020/sensors/"
  location = "office"
  name = "temperatursensor0815"
  nrOfItems = "15/"
  endpoint = "between"
  query = "?startTime=2013-05-18&endTime=2020-12-30"

  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartLabels: Label[] =[]
  //= ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  chartData:ChartDataSets[] = [{data:[], label: "Telemetry"}]
  chartType: ChartType= 'line';
  chartLegend = true

    
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Messdaten sensor 1' },




  constructor(private activatedRoute:ActivatedRoute,
    private httpClient:HttpClient) {
    this.onSensorChange()
  }

  makeRestURL():string{
    return this.baseUrl
      +this.location+"/"
      +this.name+"/"
      +this.nrOfItems
      +this.endpoint
      +this.query
  }

  ngOnInit() {
    
  }

  onSensorChange(){
    this.httpClient.get<ITelemetry[]>(this.makeRestURL())
    .subscribe(telemetry => {
      this.chartLabels = telemetry.map(x=> new Date(x.time))
        .map(d => `${d.getDate()}.${d.getMonth()}`)
        //.map(x => x.toISOString())

      this.chartData[0].data= telemetry.map(x=>x.value)
    })
  }

}

