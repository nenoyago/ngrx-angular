import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WriteUsersComponent } from './components/write-users/write-users.component';
import { ReadUsersComponent } from './components/read-users/read-users.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './shared/store/reducers/users.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, WriteUsersComponent, ReadUsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
