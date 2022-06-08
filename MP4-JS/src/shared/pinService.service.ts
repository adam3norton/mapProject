import { Injectable } from "@angular/core";
import { mapPin } from "./pin.model";

@Injectable()
export class pinService {
  mapPins: mapPin[] = [{
    latlong: {lat: 40.4, lng: -111.8},
    title: "Pin 1"
  },
  {
    latlong: {lat: 40.5, lng: -111.9},
    title: "Pin 2"
  }];

  displayPinEdit: boolean = false;

  getPinEditBool() {
    return this.displayPinEdit;
  }

  togglePinEdit() {
    this.displayPinEdit = !this.displayPinEdit;
    console.log(this.displayPinEdit);
    return this.displayPinEdit;
  }

  getPins() {
    return this.mapPins;
  }

  addPin(newlat: number, newlng: number, pinTitle: string) {
    let newPin: mapPin = {
      latlong: {lat: newlat, lng: newlng},
      title: pinTitle
    }
    this.mapPins.push(newPin);
  }
}
