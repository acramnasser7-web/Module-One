import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';
import { Login } from './login/login';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: '', component: TripListing },
  { path: 'login', component: Login },
  { path: 'add-trip', component: AddTrip, canActivate: [AuthGuard] },
  { path: 'edit-trip', component: EditTrip, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
