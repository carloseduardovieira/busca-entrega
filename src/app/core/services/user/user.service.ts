import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';
import { Storage } from '@ionic/storage';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(
    private storage: Storage,
  ) { }

  public setUser = (username: string) => {
    const user = User.build(username);
    this.storage.set('be-user', JSON.stringify(user));
    return user;
  }

  public getUser = (): Observable<User> => {

    if ( this.user ) {
      return of(this.user);
    }

    return from(this.storage.get('be-user').then((user) => {
      if ( user ) {
        this.user = JSON.parse(user);
        return this.user;
      }
    }));
  }
}
