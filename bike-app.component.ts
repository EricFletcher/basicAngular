import { Component } from '@angular/core';
import { BasicService } from 'app/basic.service';
@Component({
  selector: 'bike-app',
  styles: [`
   .app {
     display: block;
     text-align: center;
     padding: 25px;
     background: #f5f5f5;
   }
  `],
  template: `
    <div>
    <h1>Hello from the {{componentName}}.</h1>
    <div *ngFor="let b of bikes">
   <h3>ID = {{id}}</h3>
   <h4>Station = {{stationName}}</h4>
   <h4>How many docks used ={{availableDocks}}</h4>
   <h4>How total docks = {{totalDocks}}</h4>
   <h4>Lat = {{latitude}}</h4>
   <h4>Lon = {{longitude}}</h4>

    statusValue: string;
    statusKey: number;
    availableBikes: number;
    stAddress1: string;
    stAddress2: string;
    city: string;
    postalCode: string;
    location: string;
    altitude: string;
    testStation: boolean;
    lastCommunicationTime: string;
    landMark: string;</h4> 
  </div>
  `
  })
export class BikeAppComponent {
  componentName: string = 'Bike Info App'
}
