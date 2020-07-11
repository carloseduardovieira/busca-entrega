import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { SearchFormComponent } from './shared/search-form/search-form.component';
import { PricingCardsComponent } from './shared/pricing-cards/pricing-cards.component';
import { MapsModalComponent } from './shared/maps-modal/maps-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [
    SearchPage,
    SearchFormComponent,
    PricingCardsComponent,
    MapsModalComponent,
  ],
  providers: [
    MapsModalComponent,
  ]

})
export class SearchPageModule {}
