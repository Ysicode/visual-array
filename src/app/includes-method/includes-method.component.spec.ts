import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludesMethodComponent } from './includes-method.component';

describe('IncludesMethodComponent', () => {
  let component: IncludesMethodComponent;
  let fixture: ComponentFixture<IncludesMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludesMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncludesMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
