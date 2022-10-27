import { Injectable } from '@angular/core';
import * as contentfull from 'contentful';
import { from, map, observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Project } from '../models/project';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  client = contentfull.createClient(environment.contentful);
  constructor() {}

  getContent(id: string) {
    const promise = this.client.getEntry<Project>(id);
    return from(promise).pipe(map((res) => res.fields));
  }

  getAllProjects() {
    const promise = this.client.getEntries<Project>();
    return from(promise).pipe(
      map((res) =>
        res.items.map((item) => {
          console.log(item);
          return { fields: item.fields, id: item.sys.id };
        })
      )
    );
  }
}
