import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: NgForm) {
    const { email, password } = form.value;

    this.http
      .get<any[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
      .subscribe((users) => {
        if (users.length > 0) {
          const user = users[0];
          alert(`Welcome back, ${user.username}!`);
          this.router.navigate(['/dashboard']); 
        } else {
          this.errorMessage = 'Invalid email or password.';
        }
      });
  }
}
