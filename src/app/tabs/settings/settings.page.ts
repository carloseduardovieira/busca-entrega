import { Component, OnInit } from '@angular/core';
import { SettingsForm } from './shared/settings-form/settings-form.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onSubmit = ( form: SettingsForm ) => {
    console.log(form);
  }
}
