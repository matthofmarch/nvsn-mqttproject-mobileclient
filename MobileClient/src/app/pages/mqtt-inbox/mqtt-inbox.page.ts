import { Component, OnInit } from '@angular/core';
import { connect, IClientOptions, MqttClient, IClientSubscribeOptions, ISubscriptionGrant } from "mqtt";



@Component({
  selector: 'app-mqtt-inbox',
  templateUrl: './mqtt-inbox.page.html',
  styleUrls: ['./mqtt-inbox.page.scss'],
})
export class MqttInboxPage implements OnInit {

  
  brokerUrl:string
  client:MqttClient
  


  constructor() {
    this.brokerUrl = '51.136.13.51'
    this.client = connect(`mqtt://${this.brokerUrl}`)

  }

  ngOnInit() {
    this.subscribe("#")
  }

  subscribe(topic:string){
    this.client.subscribe(topic, (err:Error, granted: ISubscriptionGrant[])=>{
      if(err)throw err;
      granted.forEach(grant=>{
        console.log(grant.topic)
      })
    }).on("message", (topic, payload, packet)=>{
      console.log(`${topic}: ${payload}`)
    })
  }

}
