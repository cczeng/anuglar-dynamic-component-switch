import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from 'mapbox-gl-draw';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.less']
})
export class MapboxComponent implements OnInit {
  map;

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXJ2ZWVzIiwiYSI6ImNqYmRhZ3FmNjF4NGgyenFnMzJsdnRuOTUifQ.2JZUeZxUr_ckr3NNJlbePg';
    this.map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  flyToPoint(point) {
    this.map.flyTo({
      center: point,
      zoom: 10
    });
  }

}
