import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizzesmgmt } from './quizzesmgmt';

describe('Quizzesmgmt', () => {
  let component: Quizzesmgmt;
  let fixture: ComponentFixture<Quizzesmgmt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quizzesmgmt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quizzesmgmt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
