import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss']
})
export class TabTwoComponent implements OnInit {
   selectedSport : string = 'cricket'
  constructor() { }

  

  ngOnInit(): void {
  }

   onTabChange(Sport : string){
    this.selectedSport = Sport
  }
}
