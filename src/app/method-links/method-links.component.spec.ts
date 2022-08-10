import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodLinksComponent } from './method-links.component';

describe('MethodLinksComponent', () => {
  let component: MethodLinksComponent;
  let fixture: ComponentFixture<MethodLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
