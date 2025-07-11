import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },             
    { path: 'login', component: LoginComponent },        
    { path: 'register', component: RegisterComponent },  
    { path: '**', redirectTo: '' },                      
  ];
