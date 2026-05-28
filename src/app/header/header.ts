import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  

  constructor(private router: Router) {}
    

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  gotoBlogs() {
  console.log('blog clicked');
  this.router.navigate(['/blog']);
  }

  gotoMarketplace() {
    this.router.navigate(['/marketplace']);
  }

  gotoQuiz() {
    this.router.navigate(['/quiz']);
  }

  gotohome() {
    this.router.navigate(['/']);
  }
}  
  