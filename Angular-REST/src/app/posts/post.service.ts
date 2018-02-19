import { SharedService } from './../shared/services/shared.service';
import { Injectable } from '@angular/core';


@Injectable()
export class PostService {
url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private sharedService: SharedService) { }
  getPosts() {
  return this.sharedService.get(this.url);
  }
}
