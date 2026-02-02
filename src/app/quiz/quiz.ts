import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  constructor(private router: Router) {}

  home() {
    this.router.navigate(['/']); 
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