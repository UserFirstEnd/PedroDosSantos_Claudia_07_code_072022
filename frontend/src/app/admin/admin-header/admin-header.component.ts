import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/token/token.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  logout () {
    this.tokenService.clearToken();
  }
}
