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
  require('../../../assets/dic/pt-br-5l-words.json')
);

function createBoard() {
  const randomWord = wordsRepository.getRandomWord().toUpperCase();
  const board = new WordleBoard(wordsRepository, 13, 5, randomWord);
  return board;
}

@Component({
  selector: 'app-ptbr-eight',
  templateUrl: './ptbr-eight.component.html',
  styleUrls: ['./ptbr-eight.component.scss'],
  providers: [DialogService],
})
export class PtbrEightComponent implements OnInit {
  boards = [
    createBoard(),
    createBoard(),
    createBoard(),
    createBoard(),
    createBoard(),
    createBoard(),
    createBoard(),
    createBoard(),
  ];

  inputManager = new InputManager(wordsRepository, 5);

  constructor(private dialogService: DialogService) {
    bindBoardsToInputManager(this.boards, this.inputManager);

    waitForBoardsResult(this.boards).then((result) => {
      if (result === 'winner') {
        this.dialogService.show({
          title: 'Vencedor',
          message: 'Você venceu!',
        });
      } else {
        this.dialogService.show({
          title: 'Game Over',
          message: `As repostas eram: ${this.boards
            .map((b) => b.answer)
            .join(', ')}.`,
        });
      }
    });
  }

  ngOnInit(): void {}
}
