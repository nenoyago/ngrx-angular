import { User } from '../../models/User.model';

export const userInitialState: UserState = {
  users: [
    {
      age: 24,
      email: 'user@example.com',
      name: 'Yago',
      username: 'nenoyago',
    },
  ],
};

export interface UserState {
  users: ReadonlyArray<User>;
}
