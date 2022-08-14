import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortmethodComponent } from './sortmethod.component';

describe('SortmethodComponent', () => {
  let component: SortmethodComponent;
  let fixture: ComponentFixture<SortmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
