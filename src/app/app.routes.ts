import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './home/home';
import { Header } from './header/header';
import { Blog } from './blog/blog';
import { Quiz } from './quiz/quiz';
<<<<<<< HEAD
import { Leaderboard } from './quiz/leaderboard/leaderboard';
import { Admin } from './admin/admin';
=======
>>>>>>> 075764fa5c3cb96e2c8b02242302ec2d09514353
import { Marketplace } from './marketplace/marketplace';

// import { adminGuard } from './admin/guard/admin-guard';

// import { Adminlogin } from './admin/adminlogin/adminlogin';
// import { Blogsmgmt } from './admin/blogsmgmt/blogsmgmt';
// import { Admindashboard } from './admin/admindashboard/admindashboard';
// import { Quizzesmgmt } from './admin/quizzesmgmt/quizzesmgmt';
// import { Usersmgmt } from './admin/usersmgmt/usersmgmt';
// import { Productsmgmt } from './admin/productsmgmt/productsmgmt';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'header', component: Header },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'dashboard', component: Dashboard },
    { path: 'blog', component: Blog },
    { path: 'quiz', component: Quiz },
<<<<<<< HEAD
    { path: 'leaderboard', component: Leaderboard},
    { path: 'admin', component: Admin},
    { path: 'marketplace', component: Marketplace}
=======
    { path: 'admin', component: Admin },
    { path: 'marketplace', component: Marketplace }

>>>>>>> 075764fa5c3cb96e2c8b02242302ec2d09514353
];
