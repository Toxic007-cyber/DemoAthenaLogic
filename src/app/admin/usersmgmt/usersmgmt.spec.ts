import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersmgmt } from './usersmgmt';

describe('Usersmgmt', () => {
  let component: Usersmgmt;
  let fixture: ComponentFixture<Usersmgmt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersmgmt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersmgmt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
