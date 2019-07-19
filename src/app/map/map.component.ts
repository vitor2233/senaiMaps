import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = -25.4485546;
  lng: number = -49.24586713;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {

  }

}
