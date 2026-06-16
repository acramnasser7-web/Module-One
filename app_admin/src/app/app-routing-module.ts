import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';

const routes: Routes = [
  { path: '', component: TripListing },
  { path: 'add-trip', component: AddTrip },
  { path: 'edit-trip', component: EditTrip }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
