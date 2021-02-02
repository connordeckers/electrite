import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import type { Post } from '../types';

@Component({
  selector: 'elec-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public posts: Post[] = [];
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
