import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  public getTrips(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public addTrip(trip: any): Observable<any> {
    return this.http.post(this.apiUrl, trip);
  }

  public updateTrip(trip: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${trip.code}`, trip);
  }

  public deleteTrip(code: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${code}`);
  }
}