import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ContentfulService } from 'src/app/services/contentful.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent implements OnInit {
  projects: Project[];
  constructor(
    private p: ProjectsService,
    private contentful: ContentfulService
  ) {
    this.projects = this.p.getProjects;
  }

  ngOnInit(): void {
    // this.contentful.logContent('YurZkz1Bwevm59WlvLGTj');
    this.contentful.getAllProjects().subscribe((data) => console.log(data));
  }
}
