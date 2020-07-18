import { MapPriceComponent } from './shared/map-price/map-price.component';
import { TripComponent } from './shared/trip/trip.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: '',
        component: TripComponent
      },
      {
        path: 'maps',
        component: MapPriceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
