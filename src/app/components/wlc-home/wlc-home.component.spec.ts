import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlcHomeComponent } from './wlc-home.component';

describe('WlcHomeComponent', () => {
  let component: WlcHomeComponent;
  let fixture: ComponentFixture<WlcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlcHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WlcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
