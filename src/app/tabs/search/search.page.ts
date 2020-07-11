import { MapsModalComponent } from './shared/maps-modal/maps-modal.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CalculatorService } from 'src/app/core/services/calculator/calculator.service';
import { Settings } from 'src/app/core/models/settings.model';
import { User } from 'src/app/core/models/user.model';
import { UserService } from './../../core/services/user/user.service';
import { SearchForm } from './shared/search-form/search-form.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {

  public settings:      Settings;
  public user:          User;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private calculatorService:  CalculatorService,
    private modalCtrl:          ModalController,
    private userService:        UserService,
  ) { }

  ngOnInit() {
    this.getSettings();
    this.getUser();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onCalculate = async ( coordinates: SearchForm ) => {

    const modal = await this.modalCtrl.create({
      component: MapsModalComponent,
      cssClass: 'maps-modal',
      componentProps: {
        coordinates
      }
    });
    return await modal.present();
  }

  private getSettings = () => {
    this.subscriptions.add(
      this.calculatorService.getSettings()
      .subscribe( ( settings ) => {
        this.settings = settings;
      }),
    );
  }

  private getUser = () => {
    this.subscriptions.add(
      this.userService.getUser()
      .subscribe((user) => {
        this.user = user;
      }),
    );
  }
}
