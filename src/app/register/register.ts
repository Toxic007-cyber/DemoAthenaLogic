import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name = '';
  email = '';
  password = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  register() {
    this.auth.register({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    });
    
  }
}
