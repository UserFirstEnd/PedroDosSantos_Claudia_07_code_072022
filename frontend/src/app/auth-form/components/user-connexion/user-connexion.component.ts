import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, tap } from 'rxjs';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.scss']
})
export class UserConnexionComponent implements OnInit {

  formGroup!: FormGroup;
  loading!: boolean;
  errorMsg!: string;

  constructor(private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  loginProces() {
    if(this.formGroup.valid) {
      this.authService.login(this.formGroup.value).pipe(
        tap(() => {
          this.loading = false;
          this.router.navigate(['/social-network']);
        }),
        catchError(error => {
          this.loading = false;
          this.errorMsg = error.message;
          return EMPTY;
        })
      ).subscribe();
    }
  }
}
