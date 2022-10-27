import { MonoTypeOperatorFunction } from "rxjs";

export class Post {
  pipe(arg0: MonoTypeOperatorFunction<unknown>, arg1: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }
  append(arg0: string, arg1: string) {
      throw new Error("Method not implemented.");
  }//http://json2ts.com/
  _id!: string;
  userId!: string;
  title!: string;
  createdDate!: Date;
  imageUrl!: string;
  description!: string;
}