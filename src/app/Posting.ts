import { Comment } from './API.service';
export class Posting {
  id: string = '';
  title: string = '';
  numberOfCounts: number = 0;
  comments: Comment[] = [];

  getComments(): Comment[] {
    return this.comments;
  }
}
