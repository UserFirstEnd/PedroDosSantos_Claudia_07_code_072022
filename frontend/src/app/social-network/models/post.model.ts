import { MonoTypeOperatorFunction } from "rxjs";

export class Post {
  static id: any;
  description: any;
  pipe(arg0: MonoTypeOperatorFunction<unknown>, arg1: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }
  append(arg0: string, arg1: string) {
      throw new Error("Method not implemented.");
  }//http://json2ts.com/
  id!: number;
  userId!: number;
  title!: string;
  createdDate!: string;
  imageUrl!: string;
  content!: string;
}