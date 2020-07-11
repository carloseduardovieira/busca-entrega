import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CalculatorService } from 'src/app/core/services/calculator/calculator.service';
import { Settings } from 'src/app/core/models/settings.model';
import { SettingsForm } from './shared/settings-form/settings-form.model';
import { ToastService } from './../../core/services/toastr/toastr.service';
import { User } from 'src/app/core/models/user.model';
import { UserService } from './../../core/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {

  public settings: Settings;
  public user:     User;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private calculatorService:  CalculatorService,
    private toastService:       ToastService,
    private userService:        UserService,
  ) { }

  ngOnInit() {
    this.getSettings();
    this.getUser();
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  public onSubmit = ( form: SettingsForm ) => {
    this.setUser(form.username);
    this.setSettings(form.kmPrice);
    this.toastService.toastSuccess('Configurações registradas com sucesso!', 'Yeah');
  }

  private setUser = ( username: string ) => {
    this.userService.setUser( username );
  }

  private setSettings = ( kmPrice: number ) => {
    this.calculatorService.setSettings( kmPrice );
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
