import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService} from '../../../core/services/auth.service';
import { LoginUser } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: LoginUser = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        alert('Connexion réussie...');
        this.router.navigate(['/']); 
      },
      error: (err) => {
        console.error('Erreur de connexion', err);
      }
    });
  }
}
