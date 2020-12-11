import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersAdminComponent } from './centers-admin.component';

describe('CentersAdminComponent', () => {
  let component: CentersAdminComponent;
  let fixture: ComponentFixture<CentersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentersAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
