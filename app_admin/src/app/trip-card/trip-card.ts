import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { StorageService } from '../services/storage';

@Component({
  selector: 'app-trip-card',
  standalone: false,
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard {
  @Input() trip!: Trip;

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  onEditTrip(): void {
    this.storageService.saveTrip(this.trip);
    this.router.navigate(['edit-trip']);
  }
}
