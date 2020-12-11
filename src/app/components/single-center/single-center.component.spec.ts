import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCenterComponent } from './single-center.component';

describe('SingleCenterComponent', () => {
  let component: SingleCenterComponent;
  let fixture: ComponentFixture<SingleCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
