export class Post {
  _id!: string;
  userId!: string;
  title!: string;
  createdDate!: Date;
  imageUrl!: string;
  description!: string;
  likes!: number;
  usersLiked!: string[];
}