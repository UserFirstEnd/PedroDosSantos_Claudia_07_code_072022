/*modèle de données, avec toutes les propriétés, à injecter directement dnas PostComponent 
(avec possibilité de l'utiliser dans toute l'application)*/

/*class avec toutes les propriétés d'un post. 
Elle permet de générer des objects Post avec la syntaxe new POst()*/
export class Post {
    //on peut faire un contructor pour faciliter la création d'objects Post : ced n'est pas le cas ici !
    userId!: string;
    _id!: string; //il nous faut un id pour sellectionner le bon post
    nom!: string;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    like!: number;
    location?: string;//propriete optionnelle avec le ? c'est une propriété que l'on peut trouver ou non dans notre post
}

/*Je voudrais en profiter pour vous montrer un raccourci TypeScript. 
Si vous avez des propriétés qui seront initialisées par les arguments passés au constructor,
 vous pouvez retirer leurs déclarations et initialisations, 
et leur ajouter simplement le modificateur  public  dans le  constructor : cours 2ep.*/