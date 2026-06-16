import { Component, OnInit } from '@angular/core';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-listing',
  standalone: false,
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (trips: Trip[]) => {
        this.trips = trips;
        this.message = `${trips.length} trips found`;
      },
      error: (err) => {
        console.error(err);
        this.message = 'Error loading trips.';
      }
    });
  }
}
