import type { Dayjs } from "dayjs"

export type BlogPost = {
  id: string;
  author: BlogAuthor;
  publishedDate: Dayjs;
  timeToRead: number;
  title: string;
  photo: string;
  content: string;
  views: number;
  comments: number;
  likes: number;
  likedByUser: boolean;
}

export type BlogAuthor = {
  id: string;
  name: string;
  photo?: string;
}