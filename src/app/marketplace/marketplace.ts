import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketplace',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './marketplace.html',
  styleUrl: './marketplace.css',
})
export class Marketplace {
  constructor(
    private router: Router){}

  home() {
    this.router.navigate(['/']);
  }
}
