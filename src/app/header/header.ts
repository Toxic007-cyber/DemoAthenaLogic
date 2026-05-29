import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  standalone: true,
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


  gotoHome(){
    this.router.navigate(['/']);
  }
  
}
