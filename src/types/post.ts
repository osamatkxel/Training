import { Comment } from './comment';
export type Post = {
  id: string;
  title: string;
  numberOfComments: number;
  comments: Comment[];
};
