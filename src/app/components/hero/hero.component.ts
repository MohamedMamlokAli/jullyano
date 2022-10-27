import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  years: number = 0;
  yearsInterval: any;
  videos: number = 0;
  videosInterval: any;
  views: number = 0;
  viewsInterval: any;
  constructor() {}

  ngOnInit(): void {
    this.yearsInterval = setInterval(() => (this.years += 1), 300);
    setTimeout(() => {
      clearInterval(this.yearsInterval);
    }, 900);
    this.videosInterval = setInterval(() => (this.videos += 20), 300);
    setTimeout(() => {
      clearInterval(this.videosInterval);
    }, 1800);
    this.viewsInterval = setInterval(() => (this.views += 10000), 200);
    setTimeout(() => {
      clearInterval(this.viewsInterval);
    }, 2700);
  }
  increment() {
    this.years += 1;
  }
}
