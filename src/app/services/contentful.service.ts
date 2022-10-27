import { Injectable } from '@angular/core';
import * as contentfull from 'contentful';
import { from, map, observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  client = contentfull.createClient(environment.contentful);
  constructor() {}
  logContent(id: string) {
    this.client.getEntry(id).then((data) => console.log(data));
  }
  getContent(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise).pipe(map((res) => res.fields));
  }
  getAllProjects() {
    const promise = this.client.getEntries();
    return from(promise).pipe(
      map((res) => res.items.map((item) => item.fields))
    );
  }
}
