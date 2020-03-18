import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemperatureChartPage } from './temperature-chart.page';

describe('TemperatureChartPage', () => {
  let component: TemperatureChartPage;
  let fixture: ComponentFixture<TemperatureChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureChartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperatureChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
