import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIndexMethodComponent } from './find-index-method.component';

describe('FindIndexMethodComponent', () => {
  let component: FindIndexMethodComponent;
  let fixture: ComponentFixture<FindIndexMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindIndexMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindIndexMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
