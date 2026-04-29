import { Component, OnInit } from '@angular/core';
import { Itab } from '../../const/models/tab';

@Component({
  selector: 'app-tab-five',
  templateUrl: './tab-five.component.html',
  styleUrls: ['./tab-five.component.scss']
})
export class TabFiveComponent implements OnInit {
  tabsArr: Array<Itab> = [
    {
      tabTitle: 'Angular14',
      frameWorkName: 'angular',
      tabContent: `<strong>ANGULAR</strong> Angular is a popular, open-source, TypeScript-based frontend
                framework maintained by Google for building scalable, high-performance single-page
                applications (SPAs). It offers a component-oriented architecture, providing a full-featured
                platform with built-in tools for routing, forms, and client-server communication`
    },
    {
      tabTitle: 'Node',
      frameWorkName: 'node',
      tabContent: `<strong>NODE</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Impedit ab dicta esse at ipsum voluptatibus asperiores numquam rem distinctio id!`
    },
    {
      tabTitle: 'Sprinboot',
      frameWorkName: 'springboot',
      tabContent: `<strong>SPRINGBOOT</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem 
      aut reprehenderit delectus eius unde, rerum atque magnam excepturi est?`
    },
    {
      tabTitle: 'Laravel',
      frameWorkName: 'laravel',
      tabContent: `<strong>LARAVEL</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sed hic dolores illo asperiores quidem, amet illum alias vel officia fuga.`
    }
  ]

  selectedSkill : string = 'angular14'
  constructor() { }

 

  ngOnInit(): void {
  }

  onTabChange(skill : string){
    this.selectedSkill = skill
  }
}
