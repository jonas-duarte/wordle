import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { WordleBoardComponent } from './components/wordle-board/wordle-board.component';
import { PtbrOneComponent } from './pages/ptbr-one/ptbr-one.component';
import { PtbrTwoComponent } from './pages/ptbr-two/ptbr-two.component';
import { PtbrFourComponent } from './pages/ptbr-four/ptbr-four.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    WordleBoardComponent,
    PtbrOneComponent,
    PtbrTwoComponent,
    PtbrFourComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
