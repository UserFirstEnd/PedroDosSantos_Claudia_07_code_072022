import { MonoTypeOperatorFunction } from "rxjs";

export class Post {
  _id!: string;
  userId!: string;
  role!: string;
  title!: string;
  createdDate!: Date;
  imageUrl!: string;
  description!: string;
  likes!: number;
  dislikes!: number;
  usersLiked!: string[];
  usersDisliked!: string[];
}