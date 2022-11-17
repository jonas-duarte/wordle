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

@Component({
  selector: 'app-ptbr-one',
  templateUrl: './ptbr-one.component.html',
  styleUrls: ['./ptbr-one.component.scss'],
  providers: [DialogService],
})
export class PtbrOneComponent implements OnInit {
  board = new WordleBoard(
    wordsRepository,
    6,
    5,
    wordsRepository.getRandomWord().toUpperCase()
  );
  inputManager = new InputManager(wordsRepository, 5);

  private showMessage(text: string) {
    setTimeout(() => {
      alert(text);
    }, 100);
  }

  constructor(private dialogService: DialogService) {
    bindBoardsToInputManager([this.board], this.inputManager);

    waitForBoardsResult([this.board]).then((result) => {
      if (result === 'winner') {
        this.dialogService.show({
          title: 'Vencedor',
          message: 'Você venceu!',
        });
      } else {
        this.dialogService.show({
          title: 'Game Over',
          message: `A resposta é: ${this.board.answer}.`,
        });
      }

    });
  }

  ngOnInit(): void {}
}
