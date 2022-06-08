import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { mapPin } from 'src/shared/pin.model';
import { pinService } from 'src/shared/pinService.service';

@Component({
  selector: 'app-js-map',
  templateUrl: './js-map.component.html',
  styleUrls: ['./js-map.component.css']
})
export class JsMapComponent implements OnInit{
  title: string = 'Area Assignation';
  pins: mapPin[] = []
  image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  constructor(private pinService: pinService) { }

  ngOnInit(): void {
    this.pins = this.pinService.getPins();

    let loader = new Loader({
      apiKey: "AIzaSyCCfzqOKwOKa5OpdbgrBgHYyzp9EheZ95k",
      version: "weekly"
    });

    let mapOptions = {
      center: { lat: 40.5247, lng: -111.863 },
      zoom: 14,
    };

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);

      this.pins.forEach(pin => {
        let newPin = new google.maps.Marker({
          position: pin.latlong,
          map,
          icon: this.image,
          title: pin.title,
          draggable: true
        })

        newPin.addListener("click", () => {
          this.onClickPin
        });

      });

      map.addListener("rightclick", (event) => {
        this.onPinCreated(event.latLng, map);
      })
    });
  }
  onClickPin() {
    this.pinService.togglePinEdit();
    console.log('Pin Clicked');
  }

  onPinAddedWithForm(pinLat: HTMLInputElement, pinLng: HTMLInputElement, pinTitle: HTMLInputElement): void {
    this.pinService.addPin(parseFloat(pinLat.value), parseFloat(pinLng.value), pinTitle.value);
    this.pins = this.pinService.getPins();

    let loader = new Loader({
      apiKey: "AIzaSyCCfzqOKwOKa5OpdbgrBgHYyzp9EheZ95k",
      version: "weekly"
    });

    let mapOptions = {
      center: { lat: 40.5247, lng: -111.863 },
      zoom: 14,
    };

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);

      this.pins.forEach(pin => {
        new google.maps.Marker({
          position: pin.latlong,
          map,
          icon: this.image,
          title: pin.title,
          draggable: true
        })
      });
    });
  }

  onPinCreated(location: google.maps.LatLngLiteral, map: google.maps.Map) {
    new google.maps.Marker({
      position: location,
      map: map,
      icon: this.image,
      draggable: true
    });
  }
}
