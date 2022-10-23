import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { token } from '../token/token';
import { TokenService } from '../token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  data!: token;
  formGroup!: FormGroup;

  constructor(private authService: AuthServiceService,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  loginProcess() {
    this.authService.login(this.formGroup.value).subscribe({
      next: data => {
        console.log(data),
        this.tokenService.saveToken(data),
        this.router.navigate(['/home'])
      },
      error: err => console.log(err)
    });
  }
}
