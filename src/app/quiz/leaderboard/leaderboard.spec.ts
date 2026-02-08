import { ComponentFixture, TestBed } from '@angular/core/testing';
// Path should be './leaderboard' and the class name is 'Leaderboard'
import { Leaderboard } from './leaderboard'; 

describe('Leaderboard', () => {
  let component: Leaderboard;
  let fixture: ComponentFixture<Leaderboard>;
  
  

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      // Keep in imports if it is a standalone component
      imports: [Leaderboard] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leaderboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});