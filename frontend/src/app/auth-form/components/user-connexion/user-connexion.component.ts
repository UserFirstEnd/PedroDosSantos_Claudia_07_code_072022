import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { token } from '../../token/token';
import { TokenService } from '../../token/token.service';
import { UserIdService } from '../../user/user.service';


@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.scss']
})

export class UserConnexionComponent implements OnInit {

  data!: token;
  formGroup!: FormGroup;

  constructor(private authService: AuthServiceService,
    private router: Router,
    private tokenService: TokenService,
    private userIdService: UserIdService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  loginProcess() {
    const email = this.formGroup.get('email')!.value;
    const password = this.formGroup.get('password')!.value;
    this.authService.login(email, password).subscribe({
      next: data => {
        console.log(data),
        this.tokenService.saveToken(data),
        this.userIdService.saveUserId(data),
        this.userIdService.saveRole(data),
        this.router.navigate(['/posts'])
      },
      error: err => console.log(err)
    });
  }
}

