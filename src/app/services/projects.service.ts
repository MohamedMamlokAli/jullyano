import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: 'Ezreal Guide',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/1.jpg',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'Valorant Montage',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/2.png',
      link: '#',
      platforms: ['youtube', 'facebook', 'instagram', 'tiktok'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'League of Legends Motion Design & Montage',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/3.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'League of Legends Motion Graphics',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/4.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'Team RAAD Valorant Montage',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/5.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'Real Estate Motion Graphics',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/6.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'Team RAAD Wins An Egyptian Tournament',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/7.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'ILegion Stream Thumbnail',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/8.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'RAAD Lunatic Montage Intro',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/9.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'MENA League of Legends Highlights',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/10.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'Valorant Clip Edit',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/11.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'Kienza Stream Starting Soon',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/12.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'League of Legends VFX',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/13.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'RAAD Esports Team Logo Animation',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/14.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop'],
    },
    {
      name: 'RAAD Lunatic Player Introduction',
      description: 'A guide for a League of Legends champion',
      image: 'assets/projects/15.png',
      link: '#',
      platforms: ['youtube'],
      programs: ['aftereffects', 'photoshop']
    },
  ];
  constructor() {}
  get getProjects(): Project[] {
    return this.projects;
  }
}
