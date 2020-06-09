import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleService } from './shared/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleListComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
