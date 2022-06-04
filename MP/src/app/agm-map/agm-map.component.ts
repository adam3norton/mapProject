import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent implements OnInit {
  lat = 51;
  lng = 7.8;

  constructor() { }

  ngOnInit(): void {
  }

}
