import { Component } from '@angular/core';

type NewType = AuthService;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: any;
  public get authService(): NewType {
    return this._authService;
  }
  public set authService(value: AuthService) {
    this._authService = value;
  }
  constructor(
    private _authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Error signing up:', error);
        }
      });
    }
  }
}
