import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabOneComponent } from './shared/components/tab-one/tab-one.component';
import { TabTwoComponent } from './shared/components/tab-two/tab-two.component';
import { TabThreeComponent } from './shared/components/tab-three/tab-three.component';
import { TabFourComponent } from './shared/components/tab-four/tab-four.component';
import { TabFiveComponent } from './shared/components/tab-five/tab-five.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent,
    TabFiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
