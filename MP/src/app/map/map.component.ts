import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  userCoords = {lat: 0, lng: 0};


  ngOnInit(): void {
    // Declare the `loader`, giving it the apiKey
    let loader = new Loader({
      apiKey: 'AIzaSyCCfzqOKwOKa5OpdbgrBgHYyzp9EheZ95k'
    })

    // Declare the mapOptions object, which will be passed later
    let mapOptions = {
      center: { lat: 45, lng: -100 },
      zoom: 9
    }

    // Load, then create a new map, passing it the mapOptions we created earlier
    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map")!, mapOptions)

      // If (the user has allowed us to use their location)
      if (navigator.geolocation) {

        // Get the current position
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            // this.userCoords.lat = position.coords.latitude;
            // this.userCoords.lng = position.coords.longitude;
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            // Center the map on the user's location
            map.setCenter(pos);

            // Create a new pin at the user's location
            new google.maps.Marker({
              position: pos,
              map,
              title: "Current location",
            });
          }
        )
      }
    })
  }

onClickPanButton(): void {
  // map.setCenter(pos);
}



}
