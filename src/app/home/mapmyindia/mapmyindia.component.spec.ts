import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmyindiaComponent } from './mapmyindia.component';

describe('MapmyindiaComponent', () => {
  let component: MapmyindiaComponent;
  let fixture: ComponentFixture<MapmyindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmyindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmyindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
