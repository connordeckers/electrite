import { Component, OnInit } from '@angular/core';
import { SubredditsService } from '../subreddits.service';
import type { Subreddit } from '../types';
@Component({
  selector: 'elec-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss'],
})
export class SubredditComponent implements OnInit {
  public subscriptions: Subreddit[] = [];
  constructor(private subs: SubredditsService) {}

  ngOnInit(): void {
    this.subs.getSubreddits().subscribe((sub) => (this.subscriptions = sub));
  }
}
