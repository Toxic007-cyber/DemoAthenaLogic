import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsmgmt } from './productsmgmt';

describe('Productsmgmt', () => {
  let component: Productsmgmt;
  let fixture: ComponentFixture<Productsmgmt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productsmgmt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productsmgmt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
