import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { InputManager } from 'src/domain/input-manager';
import {
  bindBoardsToInputManager,
  waitForBoardsResult,
} from 'src/domain/utils';
import { WordleBoard } from 'src/domain/wordle-board';
import { WordsRepository } from 'src/domain/words-repository';

export const wordsRepository = new WordsRepository(
  require('../../../assets/dic/en-5l-words.json')
);

function createBoard() {
  const randomWord = wordsRepository.getRandomWord().toUpperCase();
  const board = new WordleBoard(wordsRepository, 9, 5, randomWord);
  return board;
}

@Component({
  selector: 'app-en-four',
  templateUrl: './en-four.component.html',
  styleUrls: ['./en-four.component.scss'],
  providers: [DialogService],
})
export class EnFourComponent implements OnInit {
  board1 = createBoard();
  board2 = createBoard();
  board3 = createBoard();
  board4 = createBoard();

  inputManager = new InputManager(wordsRepository, 5);

  constructor(private dialogService: DialogService) {
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
        this.dialogService.show({
          title: 'Winner',
          message: 'You won!',
        });
      } else {
        this.dialogService.show({
          title: 'Game Over',
          message: `The answers were: ${this.board1.answer}, ${this.board2.answer}, ${this.board3.answer}, ${this.board4.answer}.`,
        });
      }
    });
  }

  ngOnInit(): void {}
}
