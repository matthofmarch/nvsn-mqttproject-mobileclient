import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MqttInboxPage } from './mqtt-inbox.page';

describe('MqttInboxPage', () => {
  let component: MqttInboxPage;
  let fixture: ComponentFixture<MqttInboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqttInboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MqttInboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
