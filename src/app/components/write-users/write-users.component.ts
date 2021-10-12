import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UserActions from 'src/app/shared/store/actions/users.actions';
import { UserState } from 'src/app/shared/store/states/user.state';

@Component({
  selector: 'app-write-users',
  templateUrl: './write-users.component.html',
  styleUrls: ['./write-users.component.scss'],
})
export class WriteUsersComponent implements OnInit {
  name = '';

  constructor(
    private router: Router,
    private store: Store<{ user: UserState }>
  ) {}

  ngOnInit(): void {}

  handleCreate() {
    this.store.dispatch(
      UserActions.addUser({
        payload: {
          name: this.name,
          age: 37,
          username: this.name.toLowerCase(),
          email: `${this.name.toLowerCase()}@example.com`,
        },
      })
    );

    this.router.navigate(['..']);
  }
}
