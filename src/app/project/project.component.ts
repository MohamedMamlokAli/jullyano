import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  id!: string;
  project: Project = {} as Project;
  constructor(
    private activated: ActivatedRoute,
    private contentful: ContentfulService
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((data) => {
      this.contentful.getContent(data['id']).subscribe((data) => {
        this.project = data;
      });
    });
  }
}
