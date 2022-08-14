import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermethodComponent } from './filtermethod.component';

describe('FiltermethodComponent', () => {
  let component: FiltermethodComponent;
  let fixture: ComponentFixture<FiltermethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltermethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltermethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
