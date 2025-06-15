import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

// Angular Material
import { MatCardModule }      from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatButtonModule }    from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.html'
})
export class RegisterComponent {
  user: any = {};
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService) {}

onSubmit() {
  this.errorMessage = '';
  this.successMessage = '';
  this.authService.register(this.user).subscribe({
    next: (response) => {
      // Para .NET Core, la respuesta puede estar en response o directamente como string
      this.successMessage =
        typeof response === 'string' ? response : '¡Usuario registrado exitosamente!';
      this.user = {};
    },
    error: (err) => {
      this.errorMessage = typeof err.error === 'string'
        ? err.error
        : err.error?.message || 'Ocurrió un error inesperado. Intenta más tarde.';
    }
  });
}
}
