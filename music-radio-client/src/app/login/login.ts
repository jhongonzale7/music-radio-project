import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

// Angular Material
import { MatCardModule }      from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatButtonModule }    from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginComponent {
  credentials: any = {};
  errorMessage = '';

constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.authService.login(this.credentials).subscribe({
next: (response) => {
  sessionStorage.setItem('user', JSON.stringify(response));
  this.router.navigate(['/dashboard']);
},
      error: (err) => {
        this.errorMessage = err.error;
      }
    });
  }
}
