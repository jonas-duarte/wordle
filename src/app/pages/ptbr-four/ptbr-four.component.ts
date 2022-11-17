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

function createBoard() {
  const randomWord = wordsRepository.getRandomWord().toUpperCase();
  // const randomWord = 'BOCHA';
  const board = new WordleBoard(wordsRepository, 9, 5, randomWord);
  // setTimeout(() => board.addWord('CENAS'), 1000);
  // setTimeout(() => board.addWord('CHAME'), 2000);
  // setTimeout(() => board.addWord('BAIAS'), 3000);
  return board;
}

@Component({
  selector: 'app-ptbr-four',
  templateUrl: './ptbr-four.component.html',
  styleUrls: ['./ptbr-four.component.scss'],
})
export class PtbrFourComponent implements OnInit {
  board1 = createBoard();
  board2 = createBoard();
  board3 = createBoard();
  board4 = createBoard();

  inputManager = new InputManager(wordsRepository, 5);

  private showMessage(text: string) {
    setTimeout(() => {
      alert(text);
    }, 100);
  }

  constructor() {
    bindBoardsToInputManager(
      [this.board1, this.board2, this.board3, this.board4],
      this.inputManager
    );

    waitForBoardsResult([
      this.board1,
      this.board2,
      this.board3,
      this.board4,
    ]).then((result) => {
      if (result === 'winner') {
        this.showMessage('Winner!');
      } else {
        this.showMessage(
          `Game over!\n${this.board1.answer}\n${this.board2.answer}\n${this.board3.answer}\n${this.board4.answer}`
        );
      }
    });
  }

  ngOnInit(): void {}
}
