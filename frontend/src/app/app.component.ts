import { Component } from '@angular/core';

//decorateur composant
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//sa classe avec ces proprietés
export class AppComponent {
  title = 'social-network';
}
