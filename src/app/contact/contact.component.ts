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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('staggerInfo', [
      transition('*=>*', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger(
            '200ms',
            animate(
              '1s  ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(10px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(-5px)',
                  offset: 0.5,
                }),
                style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
              ])
            )
          ),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  contactInfo = [
    {
      icon: 'assets/you.png',
      link: 'https://www.youtube.com/channel/UCypp8oU9g2dl_fPQMcWI40w',
      text: 'Jullyano',
    },
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
      icon: 'assets/what.png',
      link: 'tel:+201221177166',
      text: '+201221177166',
    },
    {
      icon: 'assets/mail.png',
      link: 'mailto:john.waheb41@gmail.com',
      text: 'john.waheb41@gmail.com',
    },
    {
      icon: 'assets/insta.png',
      link: 'https://www.instagram.com/jullyano_waheep/',
      text: '@jullyano_waheep',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
