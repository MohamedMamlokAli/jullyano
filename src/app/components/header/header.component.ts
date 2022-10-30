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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('animateList', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(-10px)',
          color: 'cyan',
        })
      ),
      transition('void<=>*', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  toggle = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.toggle = !this.toggle;
  }
}
