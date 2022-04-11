import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-communicate-with-backend',
  templateUrl: './communicate-with-backend.component.html',
  styleUrls: ['./communicate-with-backend.component.css'],
})
export class CommunicateWithBackendComponent implements OnInit {
  posts;
  adding: boolean = true;

  constructor(private postService: PostService) {}

  // (response) => {
  //       this.posts = response;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }

  getPosts() {
    this.postService.getAll().subscribe({
      next: (response) => (this.posts = response),
      error: (error) => console.log(error),
      complete: () => console.log('Done'),
    });
  }

  savePost(title: HTMLInputElement) {
    this.adding = true;
    let post = { title: title.value };
    this.posts.splice(0, 0, { title: title.value });
    this.postService.create(post).subscribe({
      next: (response) => {
        // code goes to here...
      },
      error: (error) => {
        this.adding = false;
        this.posts.splice(0, 1);
        console.log(error);
      },
    });
    title.value = '';
  }

  deletePost(post: any) {
    this.postService.delete(post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  updatePost(post: any) {
    this.postService.update(post.id).subscribe((response) => {
      let index = (this.posts as Array<any>).indexOf(post);
      (this.posts as Array<any>).splice(index, 1, response);
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
