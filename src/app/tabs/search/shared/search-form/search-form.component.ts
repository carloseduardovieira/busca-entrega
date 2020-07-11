import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm = () => {
    const startLocation = new FormControl('', [
      Validators.required,
    ]);

    const endLocation = new FormControl('', [
      Validators.required,
    ]);

    this.form = new FormGroup({
      startLocation,
      endLocation,
    });
  }
}
