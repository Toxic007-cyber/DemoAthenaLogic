import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = "";
  password = "";

  constructor (
    private router: Router,
    private auth: Auth
  ) {}

  login(){
    this.auth.login ( { 
      email: this.email,
      password: this.password
    }).subscribe ( (res: any) => { 
      if (res.success) {
        this.router.navigate(['/dashboard']);
      }else{
        alert ("Invalid Login");
      }
    })
  }

  google(){
    // TODO: implement google login
  }

  
  register(){
    this.router.navigate(['/register']);
  }
}
