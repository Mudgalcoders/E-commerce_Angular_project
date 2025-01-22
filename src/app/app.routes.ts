import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { GuestGuard } from './guest.guard';
export const routes: Routes = [
    { path: '', component: LoginPageComponent, canActivate:[GuestGuard] },
    { path: 'login/home', component: HomePageComponent },
    { path: 'signUp', component: SignupPageComponent, canActivate:[GuestGuard]},

];
