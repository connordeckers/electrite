import { Injectable } from '@angular/core';
import type { Post } from './types';

import { POSTS } from '../dummydata/posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
}
