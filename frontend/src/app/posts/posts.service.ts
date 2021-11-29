import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Post } from "./post.model"

@Injectable({providedIn: "root"})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.unshift(post);
    this.postsUpdated.next([...this.getPosts()]);
  }

  // addPost(post: Post) {
  //   this.posts.unshift(post);
  // }
}
