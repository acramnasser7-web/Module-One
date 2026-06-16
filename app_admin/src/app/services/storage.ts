import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageName = 'tripData';

  saveTrip(trip: Object) {
    localStorage.setItem(this.storageName, JSON.stringify(trip));
  }

  getTrip(): any {
    const data = localStorage.getItem(this.storageName);
    return data ? JSON.parse(data) : null;
  }
}
