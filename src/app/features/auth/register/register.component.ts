import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterUser, UserRole, AvailableRoles } from '../../../core/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: RegisterUser = {
    email: '',
    password: '',
    pseudo: '',
    role: UserRole.PASSENGER
  };

  // Liste des rôles disponibles avec leurs libellés
  roles = AvailableRoles;



  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.register(this.user).subscribe({
      next: () => this.handleRegistrationSuccess(),
      error: (err) => this.handleRegistrationError(err)
    });
  }

  private handleRegistrationSuccess(): void {
    alert('Inscription réussie ! Vous allez être connecté...');
    this.router.navigate(['/login']);
  }

  private handleRegistrationError(error: any): void {
    console.error('Erreur d\'inscription', error);
    // Ici vous pourriez ajouter une gestion d'erreur plus élaborée
  }
}