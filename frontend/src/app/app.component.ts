import { Component, OnInit } from '@angular/core'; //OnInit pour pouvoir inicialiser les propriétés = la méthode OnInit
import { interval, Observable } from 'rxjs';//Ici, vous utilisez la méthode  interval()  (importée depuis  rxjs  ) pour créer un Observable qui émet des nombres croissants, en passant le nombre de millisecondes qui doit séparer les émissions. Vous stockez cet Observable dans une constante nommée  interval$  .
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<number>;

  ngOnInit() /*methode*/ {
    const interval$ = interval(1000).pipe(//pour ajouter des operateurs à des observables, on utilise la methode pipe sur l'observable
      map(value => value * 10)//l'operateur map permet de transformer les emission de l'observable, filter pour les filtrer, tap pour ajouter des effets secondaires
      //norme de numenclature, tous ce qui est observable termine par $
      //interval$.subscribe(value => console.log(value));
    );
  };
}