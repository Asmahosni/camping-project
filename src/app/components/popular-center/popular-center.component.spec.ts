import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCenterComponent } from './popular-center.component';

describe('PopularCenterComponent', () => {
  let component: PopularCenterComponent;
  let fixture: ComponentFixture<PopularCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
