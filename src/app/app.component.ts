import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DeleteUser, AddUser } from './store/actions/users';
import { selectUsersCount, State } from './store/reducers';

@Component({
  selector: 'onse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-school-everyone';
  userCount$: Observable<number>;

  constructor(
    private http: HttpClient,
    // eslint-disable-next-line ngrx/no-typed-global-store
    private store: Store<State>,
  ) {
    this.userCount$ = this.store.select(selectUsersCount);
    this.store.dispatch(
      new AddUser({
        id: `1`,
        name: 'new',
        surname: 'user',
        email: 'new_user@gmail.com',
        school_ids: [],
      })
    );
  }

  onClick() {
    this.store.dispatch(
      new AddUser({
        id: 'user.id',
        name: 'user.login',
        surname: 'user.type',
        email: 'user.avatar_url',
        school_ids: [],
      })
    );
  }
}
