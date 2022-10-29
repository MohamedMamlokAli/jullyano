import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { ContentfulService } from '../services/contentful.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  project!: Project;
  random!: Project;
  pageId!: string;
  randId!: string;
  constructor(
    private activated: ActivatedRoute,
    private contentful: ContentfulService
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((data) => {
      this.pageId = data['id'];
      window.scrollY = 0;

      this.contentful.getContent(data['id']).subscribe((data) => {
        this.project = data;
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
}
