import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { SettingsForm } from './settings-form.model';
import { Settings } from 'src/app/core/models/settings.model';
import { User } from './../../../../core/models/user.model';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent implements OnInit, OnChanges {

  @Input() settings:          Settings;
  @Input() user:              User;
  @Output() callSubmitForm$ =  new EventEmitter<SettingsForm>();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {}

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes.settings?.currentValue ) {
      this.settings = changes.settings.currentValue;
    }

    if ( changes.user?.currentValue ) {
      this.user = changes.user.currentValue;
      this.initForm();
      this.initFormValues();
    }
  }

  public submitForm = () => {
    const form = new SettingsForm();
    form.username = this.form.value.username;
    form.kmPrice = this.form.value.kmPrice;
    this.callSubmitForm$.emit( form );
  }

  private initForm = () => {

    const username = new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
    ]);

    const kmPrice = new FormControl('', [
      Validators.required,
    ]);

    this.form = new FormGroup({
      username,
      kmPrice,
    });
  }

  private initFormValues = () => {
    this.form.controls[`username`].setValue(this.user.username);
    this.form.controls[`kmPrice`].setValue(this.settings.kmPrice);
  }
}
