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
import { About } from '../models/project';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('staggerContent', [
      transition('*=>*', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
          ':enter',
          stagger('35ms', [
            animate(
              '1s  ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translate(-20px,-20px)',
                  offset: 0,
                }),
                style({
                  opacity: 1,
                  transform: 'translate(0px,0px)',
                  offset: 1,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void<=>*', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  about!: About;
  constructor(private contentful: ContentfulService) {}

  ngOnInit(): void {
    this.contentful.getAbout().subscribe((data) => {
      this.about = data;
    });
  }
}
