import { Comment } from './Comment';

export interface Article {
  _id: string;
  title: string;
  slug: string;
  description: string;
  keywords: string;
  metaDesc: string;
  authorName: string;
  publishedOn: string;
  edited: string;
  featured_image: string;
  comments?: Comment[];
}
