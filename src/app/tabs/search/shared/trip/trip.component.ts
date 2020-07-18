import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { Subscription } from 'rxjs';
import { SearchForm } from '../search-form/search-form.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit, OnDestroy {

  public user: User;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private userService:  UserService,
    private route:        ActivatedRoute,
    private router:       Router,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onCalculate = (coordinates: SearchForm) => {
    console.log(coordinates);
    this.router.navigate(['maps'], { relativeTo: this.route });
  }

  private getUser = () => {
    this.subscriptions.add(
      this.userService.getUser()
      .subscribe((user) => {
        this.user = user;
      }),
    );
  }
}
