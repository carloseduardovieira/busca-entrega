import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss'],
})
export class PricingCardsComponent implements OnInit {

  @Input() userPrice: number;
  @Input() uberPrice: number;

  constructor() { }

  ngOnInit() {
    this.userPrice = 12.00;
    this.uberPrice = 15.00;
  }

}
