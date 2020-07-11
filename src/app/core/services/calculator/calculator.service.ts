import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { Settings } from '../../models/settings.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private settings: Settings;

  constructor(
    private storage: Storage,
  ) { }

  public setSettings = (kmPrice: number) => {
    const settings = Settings.build(kmPrice);
    this.storage.set('be-kmPrice', JSON.stringify(settings));
    return settings;
  }

  public getSettings = (): Observable<Settings> => {

    if ( this.settings ) {
      return of(this.settings);
    }

    return from( this.storage.get('be-kmPrice').then((settings) => {
      this.settings = JSON.parse(settings);
      return this.settings;
    }));
  }
}
