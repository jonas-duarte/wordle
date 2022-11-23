import { PtbrEightComponent } from './pages/ptbr-eight/ptbr-eight.component';
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
import { DialogComponent } from './components/dialog/dialog.component';
import { EnOneComponent } from './pages/en-one/en-one.component';
import { EnTwoComponent } from './pages/en-two/en-two.component';
import { EnFourComponent } from './pages/en-four/en-four.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    WordleBoardComponent,
    PtbrOneComponent,
    PtbrTwoComponent,
    PtbrFourComponent,
    PtbrEightComponent,
    EnOneComponent,
    EnTwoComponent,
    EnFourComponent,
    HomeComponent,
    DialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
