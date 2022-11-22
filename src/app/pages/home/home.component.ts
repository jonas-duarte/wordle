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
  { key: 'pista', value: 'pista', common: true },
  { key: 'coisa', value: 'coisa', common: true },
  { key: 'narga', value: 'narga', common: true },
  { key: 'caspa', value: 'caspa', common: true },
  { key: 'corja', value: 'corja', common: true },
]);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function createBoard() {
  const randomWord = wordsRepository.getRandomWord().toUpperCase();
  const board = new WordleBoard(wordsRepository, 1, 5, randomWord);
  return board;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  board!: WordleBoard;
  inputManager = new InputManager(wordsRepository, 5);

  constructor() {}

  private async wordLooper() {
    this.board = createBoard();
    this.inputManager.clearEvents();
    bindBoardsToInputManager([this.board], this.inputManager);

    await delay(200);
    this.inputManager.handleKey('j');
    await delay(200);
    this.inputManager.handleKey('o');
    await delay(200);
    this.inputManager.handleKey('n');
    await delay(200);
    this.inputManager.handleKey('a');
    await delay(200);
    this.inputManager.handleKey('s');
    await delay(200);
    this.inputManager.handleKey('Enter');
    await delay(2000);

    setTimeout(() => {
      this.wordLooper();
    }, 200);
  }

  ngOnInit(): void {
    this.wordLooper();
  }
}
