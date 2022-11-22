import { Component, OnInit } from '@angular/core';
import { InputManager } from 'src/domain/input-manager';
import {
  bindBoardsToInputManager,
  waitForBoardsResult,
} from 'src/domain/utils';
import { WordleBoard } from 'src/domain/wordle-board';
import { WordsRepository } from 'src/domain/words-repository';

const wordsRepository = new WordsRepository([
  { key: 'jonas', value: 'jonas', common: true },
  { key: 'falso', value: 'falso', common: true },
  { key: 'coisa', value: 'coisa', common: true },
  { key: 'narga', value: 'narga', common: true },
  { key: 'corja', value: 'corja', common: true },
]);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  board!: WordleBoard;
  inputManager = new InputManager(wordsRepository, 5);

  constructor() {}

  private _lastWord = '';
  private createBoard() {
    let randomWord = this._lastWord;
    while (randomWord === this._lastWord) {
      randomWord = wordsRepository.getRandomWord().toUpperCase();
    }
    const board = new WordleBoard(wordsRepository, 1, 5, randomWord);
    this._lastWord = randomWord;
    return board;
  }

  private async wordLooper() {
    this.board = this.createBoard();
    this.inputManager.clearEvents();
    bindBoardsToInputManager([this.board], this.inputManager);

    const DELAY_MS = 200;
    await delay(DELAY_MS);
    this.inputManager.handleKey('j');
    await delay(DELAY_MS);
    this.inputManager.handleKey('o');
    await delay(DELAY_MS);
    this.inputManager.handleKey('n');
    await delay(DELAY_MS);
    this.inputManager.handleKey('a');
    await delay(DELAY_MS);
    this.inputManager.handleKey('s');
    await delay(DELAY_MS);
    this.inputManager.handleKey('Enter');
    await delay(1000);

    setTimeout(() => {
      this.wordLooper();
    });
  }

  ngOnInit(): void {
    this.wordLooper();
  }
}
