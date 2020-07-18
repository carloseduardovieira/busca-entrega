import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private GOOGLE_API_KEY = 'AIzaSyBUjiUjw9dLYDQgXPhaOsPTCs_O20qI5aA';

  constructor() { }

  public getGoogleMaps = (): Promise<any> => {
    const win = window as any;
    const googleModule = win.google;
    if ( googleModule && googleModule.maps ) {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise( (resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.GOOGLE_API_KEY}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if ( loadedGoogleModule && loadedGoogleModule.maps ) {
          resolve(loadedGoogleModule.maps);
          return;
        }

        reject('Google maps SDK not available');
      };
    });
  }
}
