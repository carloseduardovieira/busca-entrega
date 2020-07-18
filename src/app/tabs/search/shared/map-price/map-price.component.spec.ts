import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapPriceComponent } from './map-price.component';

describe('MapPriceComponent', () => {
  let component: MapPriceComponent;
  let fixture: ComponentFixture<MapPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPriceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
