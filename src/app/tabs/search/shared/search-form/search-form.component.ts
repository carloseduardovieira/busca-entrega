import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SearchForm } from './search-form.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {

  @Output() callCalculate$ = new EventEmitter<SearchForm>();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  public callCalculatePricing = () => {
    const search = new SearchForm();
    search.startLocation = this.form.value.startLocation;
    search.endLocation = this.form.value.endLocation;
    this.callCalculate$.emit(search);
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
