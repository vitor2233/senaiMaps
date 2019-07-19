import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Initialize and add the map
  initMap() {
    // The location of Uluru
    let uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    let map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({ position: uluru, map: map });
  }

}
