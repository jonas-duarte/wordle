import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { WordleBoardComponent } from './wordle-board/wordle-board.component';
import { PtbrOneComponent } from './games/ptbr-one/ptbr-one.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    WordleBoardComponent,
    PtbrOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
