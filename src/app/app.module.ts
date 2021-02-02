import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { PostComponent } from './post/post.component';

import { SubredditsService } from './subreddits.service';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [AppComponent, SubredditComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SubredditsService, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
