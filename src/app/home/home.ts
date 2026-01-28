import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Blog } from '../blog/blog';
// import { quiz } from '../quiz/quiz';
// import { Login } from "../login/login";

@Component({
  selector: 'app-home', 
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(
    private router: Router
  ){}

  goto_login() {
    this.router.navigate(['/login']);
  }

  blog(){
    this.router.navigate(['/blog']);
  }

  goto_quiz(){
    this.router.navigate(['/quiz']);
  }

  goto_blogs(){
    this.router.navigate(['/blog']);
  }
}
