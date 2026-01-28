import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  constructor(
    private router: Router
  ){}

  home(){
    this.router.navigate(['/']);
  }

  blog(){
    this.router.navigate(['/blog']);
  }
}
