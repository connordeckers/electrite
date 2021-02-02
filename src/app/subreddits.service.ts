import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subreddit } from './types';

import { SUBREDDITS } from '../dummydata/subreddits';

@Injectable({
  providedIn: 'root',
})
export class SubredditsService {
  constructor() {}
  getSubreddits(): Observable<Subreddit[]> {
    return of(SUBREDDITS);
  }
}
