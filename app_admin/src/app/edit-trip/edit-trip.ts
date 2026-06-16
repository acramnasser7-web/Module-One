import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data';
import { StorageService } from '../services/storage';

@Component({
  selector: 'app-edit-trip',
  standalone: false,
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {
  editForm!: FormGroup;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const trip = this.storageService.getTrip();
    this.editForm = this.formBuilder.group({
      _id: [trip?._id],
      code: [trip?.code, Validators.required],
      name: [trip?.name, Validators.required],
      length: [trip?.length, Validators.required],
      start: [trip?.start, Validators.required],
      resort: [trip?.resort, Validators.required],
      perPerson: [trip?.perPerson, Validators.required],
      image: [trip?.image, Validators.required],
      description: [trip?.description, Validators.required]
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.tripDataService.updateTrip(this.editForm.value).subscribe({
      next: () => this.router.navigate(['']),
      error: (err) => {
        console.error(err);
        this.message = 'Error updating trip.';
      }
    });
  }
}
