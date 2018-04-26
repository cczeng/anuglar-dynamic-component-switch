import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './app-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeComponent } from './home.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { MapmyindiaComponent } from './mapmyindia/mapmyindia.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    MapboxComponent,
    MapmyindiaComponent,
    MapComponent
  ],
  entryComponents: [
    MapboxComponent,
    MapmyindiaComponent
  ]
})
export class HomeModule { }
