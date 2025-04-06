import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

// type NewType = AuthService;

@Component({
 selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    // private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  // onSubmit(): void {
  //   if (this.signUpForm.valid) {
  //     this.authService.signUp(this.signUpForm.value).subscribe({
  //       next: () => {
  //         this.router.navigate(['/login']);
  //       },
  //       error: (error: any) => {
  //         console.error('Error signing up:', error);
  //       }
  //     });
  //   }
  // }
}
