import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapmyindia',
  templateUrl: './mapmyindia.component.html',
  styleUrls: ['./mapmyindia.component.less']
})
export class MapmyindiaComponent implements OnInit {
  map;

  constructor() { }

  ngOnInit() {
    this.map = new MapmyIndia.Map("mapmyindia", {
      center: [28.61, 77.23], zoomControl: true, hybrid: true
    });
  }

  flyToPoint(point) {
    this.map.flyTo([point[1], point[0]], 10);
  }

}
