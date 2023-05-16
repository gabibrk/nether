import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  posts: any[];
  filteredPosts: any[]=[];
  searchValue: string;

  constructor(private route: ActivatedRoute, private userService:UsersService) {
    this.posts = [];
    this.filteredPosts = [];
    this.searchValue = '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id =params['id'];
      this.userService.getUserAlbums(id).subscribe(res=>{
        console.log(res)
        this.posts = [...res];
        this.filteredPosts = [...res];
      })
    });
    
  }

  filterPosts() {
    if (this.searchValue.trim() === '') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.body.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }
}
