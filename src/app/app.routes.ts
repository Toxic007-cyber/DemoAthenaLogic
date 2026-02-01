import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './home/home';
import { Header } from './header/header';
import { Blog } from './blog/blog';
import { Quiz } from './quiz/quiz';
import { Admin } from './admin/admin';
import { Marketplace } from './marketplace/marketplace';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'header', component: Header },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'dashboard', component: Dashboard },
    { path: 'blog', component: Blog },
    { path: 'quiz', component: Quiz },
    { path: 'admin', component: Admin },
    { path: 'marketplace', component: Marketplace }

];
