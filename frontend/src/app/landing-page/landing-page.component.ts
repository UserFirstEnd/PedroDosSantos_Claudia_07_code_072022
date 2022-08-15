import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;//variable liée à notre input

  constructor(private router: Router) { }

  //les methodes
  ngOnInit(): void {
  }

  onContinue(): void {//void pour dire qu'il n'y a pas de retour
    this.router.navigateByUrl('posts');//pour etre redirect vers posts
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }
}
