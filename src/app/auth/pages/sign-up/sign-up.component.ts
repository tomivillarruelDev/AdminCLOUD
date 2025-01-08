import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignUpComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  private authService = inject(AuthService);

  public signUpForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this,
      (this.signUpForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required, Validators.minLength(3)]],
        genre: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        hierarchy: ['', [Validators.required, Validators.minLength(3)]],
        user: ['', [Validators.required, Validators.minLength(3)]],
        password: [
          '',
          [Validators.required, Validators.minLength(6)],
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}'),
        ],
        password2: [
          '',
          [Validators.required, Validators.minLength(6)],
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}'),
        ],
      }));
  }

  public onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.signUpForm.value);
  }
}
