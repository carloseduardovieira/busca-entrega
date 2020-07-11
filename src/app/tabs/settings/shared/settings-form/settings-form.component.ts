import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SettingsForm } from './settings-form.model';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent implements OnInit {

  @Output() callSubmitForm = new EventEmitter<SettingsForm>();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  public submitForm = () => {
    const form = new SettingsForm();
    form.username = this.form.value.username;
    form.kmPrice = this.form.value.kmPrice;
    this.callSubmitForm.emit( form );
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
}
