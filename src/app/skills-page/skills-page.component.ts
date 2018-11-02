import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {
 
  technologies=[
    {
      type: 'Programing Language',
      icon:'fa-code',
      skills: ['Java','JavaScript', 'C#']
    },
    {
      type: 'Front-end',
      icon:'fa-window-maximize',
      skills: ['HTML5', 'CSS3', 'SCSS', 'jQuery', 'Webpack', 'npm']
    },
    {
      type: 'Back-end',
      icon:'fa-database',
      skills: [ 'Node', 'SQL', 'NoSQL', 'Firebase', 'Express.js']
    },
    {
      type: 'Source Control',
      icon:'fa-code-branch',
      skills: ['Git', 'GitHub', 'GitFlow']
    },
    {
      type: 'Frameworks',
      icon:'fa-toolbox',
      skills: ['Bootstrap', 'Materializer', 'React', 'Angular', 'Redux']
    },
    {
      type: 'Web Services',
      icon:'fa-cloud',
      skills: ['AWS', 'EC2', 'Route53', 'RESTful API', 'Nginx']
    },
  ];
  constructor() { }

  ngOnInit() {}
    
}
