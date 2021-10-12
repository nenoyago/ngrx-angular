import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/User.model';
import { UserState } from 'src/app/shared/store/states/user.state';
import * as UserActions from 'src/app/shared/store/actions/users.actions';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.scss'],
})
export class ReadUsersComponent implements OnInit {
  users$: Observable<ReadonlyArray<User>>;

  constructor(private store: Store<{ user: UserState }>) {
    this.users$ = this.store.select('user').pipe(map(data => data.users));
  }

  ngOnInit(): void {}

  handleRemoveUser(index: number): void {
    this.store.dispatch(UserActions.removeUser({ index }));
  }
}
