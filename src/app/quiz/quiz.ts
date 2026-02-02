import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // 1. Import 'Router' service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [RouterModule, CommonModule], // 2. Keep RouterModule in imports for the HTML routerLink
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  // 3. Inject 'Router' instead of 'RouterModule'
  constructor(private router: Router) {}

  home() {
    this.router.navigate(['/']); // Now this will work
  }

  blog() {
    this.router.navigate(['/blog']);
  }

  showLeaderboard = false;

  openLeaderboard(){
    this.showLeaderboard = true;
  }  

  closeLeaderboard(){
    this.showLeaderboard = false;

  }
  
}