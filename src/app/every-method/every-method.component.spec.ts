import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryMethodComponent } from './every-method.component';

describe('EveryMethodComponent', () => {
  let component: EveryMethodComponent;
  let fixture: ComponentFixture<EveryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
