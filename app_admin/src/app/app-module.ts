import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { TripListing } from './trip-listing/trip-listing';
import { TripCard } from './trip-card/trip-card';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';
import { Login } from './login/login';
import { JwtInterceptor } from './utils/jwt.interceptor';

@NgModule({
  declarations: [App, Navbar, TripListing, TripCard, AddTrip, EditTrip, Login],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [App],
})
export class AppModule {}
