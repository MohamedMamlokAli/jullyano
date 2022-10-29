import { Injectable } from '@angular/core';
import { INSPECT_MAX_BYTES } from 'buffer';
import * as contentfull from 'contentful';
import { from, map, observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Project } from '../models/project';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  client = contentfull.createClient(environment.contentful);
  ids: string[] = [];
  constructor() {}

  getContent(id: string) {
    const promise = this.client.getEntry<Project>(id);
    return from(promise).pipe(
      map((res) => {
        return res.fields;
      })
    );
  }

  getAllProjects() {
    const promise = this.client.getEntries<Project>();
    return from(promise).pipe(
      map((res) =>
        res.items
          .filter((item) => item.fields.description)
          .map((item) => {
            return { fields: item.fields, id: item.sys.id };
          })
      )
    );
  }
  getAllProjectsId() {
    const promise = this.client.getEntries<Project>();
    return from(promise).pipe(
      map((res) =>
        res.items
          .filter((item) => item.fields.description)
          .map((item) => {
            return item.sys.id;
          })
      )
    );
  }
}
