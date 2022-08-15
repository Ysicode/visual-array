import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeMethodComponent } from './some-method.component';

describe('SomeMethodComponent', () => {
  let component: SomeMethodComponent;
  let fixture: ComponentFixture<SomeMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
