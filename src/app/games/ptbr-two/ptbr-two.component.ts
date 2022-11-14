import { Component, OnInit } from '@angular/core';
import { InputManager } from 'src/domain/input-manager';
import {
  bindBoardsToInputManager,
  waitForBoardsResult,
} from 'src/domain/utils';
import { WordleBoard } from 'src/domain/wordle-board';
import { WordsRepository } from 'src/domain/words-repository';

export const wordsRepository = new WordsRepository(
  require('../../../assets/dic/pt-br-5l-words.json')
);

@Component({
  selector: 'app-ptbr-two',
  templateUrl: './ptbr-two.component.html',
  styleUrls: ['./ptbr-two.component.scss'],
})
export class PtbrTwoComponent implements OnInit {
  board1 = new WordleBoard(
    wordsRepository,
    7,
    5,
    wordsRepository.getRandomWord().toUpperCase()
  );

  board2 = new WordleBoard(
    wordsRepository,
    7,
    5,
    wordsRepository.getRandomWord().toUpperCase()
  );

  inputManager = new InputManager(wordsRepository, 5);

  private showMessage(text: string) {
    setTimeout(() => {
      alert(text);
    }, 100);
  }

  constructor() {
    bindBoardsToInputManager([this.board1, this.board2], this.inputManager);

    waitForBoardsResult([this.board1, this.board2]).then((result) => {
      if (result === 'winner') {
        this.showMessage('Winner!');
      } else {
        this.showMessage('Game Over!');
      }
    });
  }

  ngOnInit(): void {}
}
