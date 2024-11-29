import { Component } from '@angular/core';
import { Authen } from '../../models/authentication';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authModel: Authen = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private route: Router, private authService: AuthService) {}

  onSubmit() {
    console.log('Form submitted');
    this.authService.login(this.authModel).subscribe({
      next: (res) => {
        console.log('result ', res);
        if (res) {
          this.route.navigate(['/allregistered']);
        } else {
          this.errorMessage = 'Username or password is incorrect';
        }
      },
      error: (err) => {
        alert('login fail');
      },
    });
  }

  onClear() {
    this.authModel = { username: '', password: '' };
  }
}
