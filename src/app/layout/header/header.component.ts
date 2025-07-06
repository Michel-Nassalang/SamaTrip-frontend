import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user$!: Observable<User | null>;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = this.userService.user$;
    this.user$.subscribe(user => {
      console.log('User value:', user);
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.userService.clearUser();
    this.router.navigate(['/login']);
  }
}
