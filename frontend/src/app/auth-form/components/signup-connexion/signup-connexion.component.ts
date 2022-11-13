import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { AuthServiceService } from '../../auth-service.service';
import { TokenService } from '../../token/token.service';
import { UserIdService } from '../../user/user.service';

@Component({
  selector: 'app-signup-connexion',
  templateUrl: './signup-connexion.component.html',
  styleUrls: ['./signup-connexion.component.scss']
})
export class SignupConnexionComponent implements OnInit {

  formGroup!: FormGroup;
  errorMsg!: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private tokenService: TokenService,
    private userIdService: UserIdService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSignup() {
    const email = this.formGroup.get('email')!.value;
    const password = this.formGroup.get('password')!.value;
    this.authService.createUser(email, password).pipe(
      switchMap(() => this.authService.login(email, password)),
      tap((data) => {
        console.log(data),
        this.tokenService.saveToken(data),
        this.userIdService.saveUserId(data),
        this.userIdService.saveRole(data),
        this.router.navigate(['/posts']);
      }),
      catchError(error => {
        this.errorMsg = error.message;
        return EMPTY;
      })
    ).subscribe();
  }
}
