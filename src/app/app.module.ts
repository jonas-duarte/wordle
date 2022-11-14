import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { WordleBoardComponent } from './wordle-board/wordle-board.component';
import { PtbrOneComponent } from './games/ptbr-one/ptbr-one.component';
import { PtbrTwoComponent } from './games/ptbr-two/ptbr-two.component';
import { PtbrFourComponent } from './games/ptbr-four/ptbr-four.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    WordleBoardComponent,
    PtbrOneComponent,
    PtbrTwoComponent,
    PtbrFourComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
