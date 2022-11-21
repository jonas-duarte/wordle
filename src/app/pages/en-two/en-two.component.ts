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

@Component({
  selector: 'app-en-two',
  templateUrl: './en-two.component.html',
  styleUrls: ['./en-two.component.scss'],
  providers: [DialogService],
})
export class EnTwoComponent implements OnInit {
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

  constructor(private dialogService: DialogService) {
    bindBoardsToInputManager([this.board1, this.board2], this.inputManager);

    waitForBoardsResult([this.board1, this.board2]).then((result) => {
      if (result === 'winner') {
        this.dialogService.show({
          title: 'Winner',
          message: 'You won!',
        });
      } else {
        this.dialogService.show({
          title: 'Game Over',
          message: `The answers were: ${this.board1.answer}, ${this.board2.answer}.`,
        });
      }
    });
  }

  ngOnInit(): void {}
}
