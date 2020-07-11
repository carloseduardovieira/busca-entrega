import { Settings } from 'src/app/core/models/settings.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss'],
})
export class PricingCardsComponent implements OnInit {

  @Input() settings: Settings;

  public userPrice: number;
  public uberPrice: number;

  constructor() { }

  ngOnInit() {
    this.userPrice = 0;
    this.uberPrice = 0;

  }

}
