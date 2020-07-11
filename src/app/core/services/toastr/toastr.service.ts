import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

declare type toastPosition = 'top' | 'bottom' | 'middle';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  /**
   * Metodo que irá exibir o toaster de sucesso!
   */
  async toastSuccess(
    message: string,
    header: string = null,
    duration: number = 2000,
    position: toastPosition = 'top'
  ): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      header,
      message,
      duration,
      position,
      color: 'success',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
    return toast;
  }

  /**
   * Metodo que irá exibir o toaster de erro!
   */
  async toastError(
    message: string,
    header: string = null,
    duration: number = 4000,
    position: toastPosition = 'top'
  ): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      header,
      message,
      duration,
      position,
      color: 'danger',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
    return toast;
  }

  /**
   * Metodo que irá exibir o toaster de alerta!
   */
  async toastWarning(
    message: string,
    header: string = null,
    duration: number = 3000,
    position: toastPosition = 'top'
  ): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      header,
      message,
      duration,
      position,
      color: 'warning',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
    return toast;
  }

  /**
   * Metodo que irá exibir o toaster de informação!
   */
  async toastInfo(
    message: string,
    header: string = null,
    duration: number = 3000,
    position: toastPosition = 'top'
  ): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      header,
      message,
      duration,
      position,
      color: 'medium',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
    return toast;
  }
}
