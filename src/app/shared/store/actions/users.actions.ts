import { createAction, props } from '@ngrx/store';
import { User } from '../../models/User.model';

export const addUser = createAction(
  '[User List] Add User',
  props<{ payload: User }>()
);
export const removeUser = createAction(
  '[User List] Remove User',
  props<{ index: number }>()
);
export const listUsers = createAction('[User List] List Users');
