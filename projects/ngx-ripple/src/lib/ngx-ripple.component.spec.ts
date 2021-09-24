import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRippleComponent } from './ngx-ripple.component';

describe('NgxRippleComponent', () => {
  let component: NgxRippleComponent;
  let fixture: ComponentFixture<NgxRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRippleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
