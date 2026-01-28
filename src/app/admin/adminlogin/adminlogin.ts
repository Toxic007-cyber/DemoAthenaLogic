import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.css',
})
export class Adminlogin {
  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  adminLogin() {
    // Reset error message
    this.errorMessage = '';
    
    // Validate form
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;

    this.http.post<any>('http://localhost:3000/api/admin/adminlogin', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        localStorage.setItem('adminToken', res.token);
        this.router.navigate(['/admin/admindashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Login error:', err);
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }
      }
    });
  }
}
