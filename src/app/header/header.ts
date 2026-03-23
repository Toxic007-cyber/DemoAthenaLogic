import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor (
    private router: Router
  ){}
  goto_login(){
    this.router.navigate(['./login']);
  }

  goto_blogs(){
    this.router.navigate(['blog']);
  }

  goto_quiz(){
    this.router.navigate(['/quiz']);
  }

  goto_marketplace(){
    this.router.navigate(['/marketplace']);
  }

  goto_home(){
    this.router.navigate(['/']);
  }
  
}
