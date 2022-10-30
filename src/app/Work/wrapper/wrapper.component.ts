import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ContentfulService } from 'src/app/services/contentful.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  animations: [
    trigger('stagger', [
      transition('*=>*', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(':leave', [style({ opacity: 1 })], { optional: true }),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-35px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(15px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('100ms', [
            animate(
              '.3s ease-out',
              keyframes([
                style({
                  opacity: 1,
                  transform: 'translateY(0px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(15px)',
                  offset: 0.3,
                }),
                style({
                  opacity: 0,
                  transform: 'translateY(-35px)',
                  offset: 1,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class WrapperComponent implements OnInit {
  projects!: {
    fields: Project;
    id: string;
  }[];
  constructor(
    private p: ProjectsService,
    private contentful: ContentfulService
  ) {}

  ngOnInit(): void {
    // this.contentful.logContent('YurZkz1Bwevm59WlvLGTj');
    this.contentful.getAllProjects().subscribe((data) => {
      this.projects = data;
      console.log(data);
    });
  }
}
