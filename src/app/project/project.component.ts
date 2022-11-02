import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { ContentfulService } from '../services/contentful.service';

const fade_in = trigger('fadeIn', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),
  transition('void<=>*', [animate('1s ease-in-out')]),
]);
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [fade_in],
})
export class ProjectComponent implements OnInit {
  project!: Project;
  random!: Project;
  pageId!: string;
  randId!: string;
  fetching = false;
  constructor(
    private activated: ActivatedRoute,
    private contentful: ContentfulService
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((data) => {
      this.pageId = data['id'];
      window.scrollY = 0;
      this.fetching = true;
      this.contentful.getContent(data['id']).subscribe((data) => {
        this.project = data;
        this.fetching = false;
      });
      this.contentful
        .getAllProjectsId()
        .subscribe((data) =>
          this.contentful
            .getContent(this.getrandom(data))
            .subscribe((item) => (this.random = item))
        );
    });
  }
  getrandom(data: string[]) {
    let ran = data[Math.floor(Math.random() * data.length)];
    while (ran == this.pageId) {
      ran = data[Math.floor(Math.random() * data.length)];
    }
    this.randId = ran;
    return ran;
  }
  startAnimation(event: any) {
    console.log(event);
  }
}
