import { MapComponent } from './map/map.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MapboxComponent } from './mapbox/mapbox.component';
import { MapmyindiaComponent } from './mapmyindia/mapmyindia.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  map = MapboxComponent;

  @ViewChild(MapComponent) maps: any;

  constructor() { }

  ngOnInit() {
  }

  switchMap() {
    this.map = this.map === MapboxComponent ? MapmyindiaComponent : MapboxComponent;
  }

  fly() {
    this.maps.flyTo();
  }

}
