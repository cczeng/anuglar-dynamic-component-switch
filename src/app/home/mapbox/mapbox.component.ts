import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from 'mapbox-gl-draw';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.less']
})
export class MapboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXJ2ZWVzIiwiYSI6ImNqYmRhZ3FmNjF4NGgyenFnMzJsdnRuOTUifQ.2JZUeZxUr_ckr3NNJlbePg';
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

}
