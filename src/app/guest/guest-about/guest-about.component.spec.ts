import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAboutComponent } from './guest-about.component';

describe('GuestAboutComponent', () => {
  let component: GuestAboutComponent;
  let fixture: ComponentFixture<GuestAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
