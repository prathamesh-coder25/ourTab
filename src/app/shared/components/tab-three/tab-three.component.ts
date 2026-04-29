import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.scss']
})
export class TabThreeComponent implements OnInit {
  selectedMenswear : string = 'FORMAL'

  constructor() { }

  ngOnInit(): void {
  }
  onTabChange(Menswear : string){
    this.selectedMenswear = Menswear
}
}
