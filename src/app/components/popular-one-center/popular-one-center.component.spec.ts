import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularOneCenterComponent } from './popular-one-center.component';

describe('PopularOneCenterComponent', () => {
  let component: PopularOneCenterComponent;
  let fixture: ComponentFixture<PopularOneCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularOneCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularOneCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
