import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  formData: Vehicle;
  list: Vehicle[];

  readonly URL = "http://localhost:3333/veiculos";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  postVehicle(formData : Vehicle) {
    return this.http.post(this.URL, formData);
  }

  putVehicle(formData : Vehicle) {
    return this.http.put(this.URL + '/' + formData.id, formData);
  }

  deleteVehicle(id : number) {
    return this.http.delete(this.URL + '/' + id);
  }

  getVehicle(): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.URL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
