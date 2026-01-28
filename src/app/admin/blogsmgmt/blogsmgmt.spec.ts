import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogsmgmt } from './blogsmgmt';

describe('Blogsmgmt', () => {
  let component: Blogsmgmt;
  let fixture: ComponentFixture<Blogsmgmt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogsmgmt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogsmgmt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
