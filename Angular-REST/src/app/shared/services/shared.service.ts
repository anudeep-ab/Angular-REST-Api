import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {

  constructor(private http: Http) { }
  get(path) {
  const url = path;
  return this.http.get(url)
  .map(res => res.json());
  }
}
