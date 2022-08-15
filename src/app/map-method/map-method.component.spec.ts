import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMethodComponent } from './map-method.component';

describe('MapMethodComponent', () => {
  let component: MapMethodComponent;
  let fixture: ComponentFixture<MapMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
