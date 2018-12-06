import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[] = [];
  constructor() { }

  ngOnInit() {
    let blog1 = new BlogPost('Blog Post 1', 'Lorem ipsum dolor sit amet. Donec varius gravida eleifend.');
    let blog2 = new BlogPost('Blog Post 2', 'Summary 2');

    this.blogPosts.push(blog1, blog2);
  }

}
