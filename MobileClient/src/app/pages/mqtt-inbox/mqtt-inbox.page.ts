import { Component } from '@angular/core';
import { IMqttMessage, MqttModule, IMqttServiceOptions, MqttService } from "ngx-mqtt";
import { Subscription, Observable } from 'rxjs';
import { map } from "rxjs/operators";

export interface MqttInboxMessage{
  topic: string
  content: ICustomMqttMessage
}

export interface ICustomMqttMessage{
  type: string,
  value: number,
  unit: string
}

@Component({
  selector: 'app-mqtt-inbox',
  templateUrl: './mqtt-inbox.page.html',
  styleUrls: ['./mqtt-inbox.page.scss'],
})
export class MqttInboxPage  {
  topic:string = "#"
  mqttInboxSubscription$:Subscription
  inbox = []

  constructor(private _mqttService: MqttService) {

    this.mqttInboxSubscription$ = this.subscribe()
  }

  //Clean up before leaving page
  public ionViewWillLeave() {
    this.mqttInboxSubscription$.unsubscribe()
  }

  onTopicChange(){
    this.unsubscribe()
    this.inbox = []
    this.mqttInboxSubscription$ = this.subscribe()
  }

  subscribe():Subscription
  {
    return this._mqttService.observe(this.topic)
    .pipe(
      map((m, _) =>  ({
        topic: m.topic, 
        content: JSON.parse(new TextDecoder('utf-8').decode(m.payload)) as ICustomMqttMessage
      }as MqttInboxMessage))
    ).subscribe(
      m => this.inbox.splice(0,0,m)
    )
  }

  unsubscribe()
  {
    this.mqttInboxSubscription$.unsubscribe()
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }


  toggleLight(requestState: boolean){
    this.unsafePublish('device/mohammed/light1', 
      JSON.stringify({type: 'cmd', value: requestState, unit: 'bool'}))
  }

}
