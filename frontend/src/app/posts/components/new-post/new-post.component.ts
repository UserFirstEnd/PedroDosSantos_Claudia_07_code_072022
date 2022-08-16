import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../../../core/models/post.model';
import { map } from 'rxjs/operators';
import { PostService } from '../../../core/services/post.service';
import { Router } from '@angular/router';

//Le fait d'avoir importé ReactiveFormsModule vous permet de lier un objet de type FormGroup à un  <form>  avec l'attribut  
//formGroup  .
//Il faut attribuer un  formControlName  à chaque input que vous ajouterez à ce formulaire : ces noms doivent correspondre 
//aux noms 
//des contrôles créés avec FormBuilder :
// form reacti
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  //generer le formulaire, ici la variable. Tout est lié à ce formGroup
  postForm!: FormGroup;
  postPreview$!: Observable<Post>;//observable qui emmet des posts
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.postForm = this.formBuilder.group({
      //object de config*/
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null],
    }), {
      updateOn: 'blur' //le formulaire n'est mit à jour juste quand on change de champ (pour eviter les erreurs dans la console)
    }
    this.postPreview$ = this.postForm.valueChanges.pipe(//l operateur pipe pour modifier les emission de l'observable
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        like: 0
      }))
    );//valueChanges est un observable */
  }

  onSubmitForm(): void {//pas besoin d'argument comme pour les formulaires template, car on accede directement à notre variable ici postForm
    this.postService.addPost(this.postForm.value);
    this.router.navigateByUrl('/posts');
  }
}
