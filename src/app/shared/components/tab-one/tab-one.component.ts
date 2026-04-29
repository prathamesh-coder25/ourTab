import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.scss']
})
export class TabOneComponent implements OnInit {
  selectedLlm : string = 'ChatGPT'

  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(Llm : string){
    this.selectedLlm = Llm
  }
}
