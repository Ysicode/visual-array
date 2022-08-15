import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMethodComponent } from './find-method.component';

describe('FindMethodComponent', () => {
  let component: FindMethodComponent;
  let fixture: ComponentFixture<FindMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
