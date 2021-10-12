import { createReducer, on } from '@ngrx/store';
import { userInitialState } from '../states/user.state';
import * as UserActions from '../actions/users.actions';

export const userReducer = createReducer(
  userInitialState,
  on(UserActions.addUser, (state, { payload }) => {
    return {
      ...state,
      users: [...state.users, payload],
    };
  }),
  on(UserActions.removeUser, (state, { index }) => {
    const users = [...state.users];

    users.splice(index, 1);

    return {
      ...state,
      users,
    };
  }),
  on(UserActions.listUsers, state => {
    return {
      ...state,
      users: state.users,
    };
  })
);
