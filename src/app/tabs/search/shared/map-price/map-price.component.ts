import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { CalculatorService } from 'src/app/core/services/calculator/calculator.service';
import { Settings } from './../../../../core/models/settings.model';
import { MapsService } from 'src/app/core/services/maps/maps.service';

@Component({
  selector: 'app-map-price',
  templateUrl: './map-price.component.html',
  styleUrls: ['./map-price.component.scss'],
})
export class MapPriceComponent implements OnInit, AfterViewInit {

  @ViewChild('map', {static: false}) mapElementRef: ElementRef;

  public settings: Settings;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private calculatorService:  CalculatorService,
    private mapsService:        MapsService,
    private render:             Renderer2,
  ) { }

  ngOnInit() {
    this.getSettings();
  }

  ngAfterViewInit() {
    this.createMapInstance();
  }

  private setMapCoordinates = ( googleMaps: any, mapEl: ElementRef ) => {
    return new googleMaps.Map( mapEl, {
      center: { lat: -20.332925 , lng: -40.3873988 },
      zoom: 17
    });
  }

  private renderHtmlMap = ( googleMaps: any, map: any, mapEl: ElementRef ) => {
    // disparado assim que o mapa carregado
    googleMaps.event.addListenerOnce(map, 'idle', () => {
      this.render.addClass(mapEl, 'visible');
    });
  }

  private createMapInstance = () => {
    const mapEl = this.mapElementRef.nativeElement;

    this.mapsService.getGoogleMaps().then( ( googleMaps ) => {
      const map = this.setMapCoordinates( googleMaps, mapEl );
      this.renderHtmlMap( googleMaps, map, mapEl );
    }).catch(error => {
      console.log(error);
    });
  }

  private getSettings = () => {
    this.subscriptions.add(
      this.calculatorService.getSettings()
      .subscribe( ( settings ) => {
        this.settings = settings;
      }),
    );
  }
}
