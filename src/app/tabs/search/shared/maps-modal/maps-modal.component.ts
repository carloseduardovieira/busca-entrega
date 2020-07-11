import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { SearchForm } from './../search-form/search-form.model';

@Component({
  selector: 'app-maps-modal',
  templateUrl: './maps-modal.component.html',
  styleUrls: ['./maps-modal.component.scss'],
})
export class MapsModalComponent implements OnInit {

  @Input() coordinates: SearchForm[] = [];

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  public close = () => {
    this.modalCtrl.dismiss();
  }
}
