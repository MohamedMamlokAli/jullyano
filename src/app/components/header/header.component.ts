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
  contactInfo = [
    {
      icon: 'assets/face.png',
      link: 'https://www.facebook.com/Jullyano1',
      text: 'Jullyano',
    },
    {
      icon: 'assets/twitter.png',
      link: 'https://twitter.com/Jullyano_lol',
      text: '@Jullyano_lol',
    },

    {
      icon: 'assets/insta.png',
      link: 'https://www.instagram.com/jullyano_waheep/',
      text: '@jullyano_waheep',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.toggle = !this.toggle;
  }
}
