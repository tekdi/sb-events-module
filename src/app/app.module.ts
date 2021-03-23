import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventLibraryModule } from '../../projects/event-library/src/lib/event-library.module';

import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailRedirectionComponent } from './detail-redirection/detail-redirection.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFomComponent } from './user-fom/user-fom.component';

import  * as configData from '../environments/urlConfig';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailRedirectionComponent,
    UserListComponent,
    UserDetailComponent,
    UserFomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventLibraryModule.forChild(configData),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
