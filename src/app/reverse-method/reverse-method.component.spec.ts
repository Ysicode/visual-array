import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseMethodComponent } from './reverse-method.component';

describe('ReverseMethodComponent', () => {
  let component: ReverseMethodComponent;
  let fixture: ComponentFixture<ReverseMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
