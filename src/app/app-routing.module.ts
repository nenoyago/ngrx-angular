import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadUsersComponent } from './components/read-users/read-users.component';
import { WriteUsersComponent } from './components/write-users/write-users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: ReadUsersComponent },
  { path: 'create-user', component: WriteUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
