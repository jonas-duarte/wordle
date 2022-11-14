import { Component, OnInit } from '@angular/core';
import { InputManager } from 'src/domain/input-manager';
import { WordleBoard } from 'src/domain/wordle-board';
import { WordsRepository } from 'src/domain/words-repository';

export const wordsRepository = new WordsRepository(
  require('../../../assets/dic/pt-br-5l-words.json')
);

@Component({
  selector: 'app-ptbr-one',
  templateUrl: './ptbr-one.component.html',
  styleUrls: ['./ptbr-one.component.scss'],
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

  private setupBoardEvents() {
    this.board.onFinish(({ status }) => {
      if (status === 'winner') {
        this.showMessage('You win!');
      } else if (status === 'game-over') {
        this.showMessage('Game over!');
      }
    });
  }

  constructor() {
    this.inputManager.onConfirm((word: string) => {
      this.board.addWord(word);
    });
    this.setupBoardEvents();
  }

  ngOnInit(): void {}
}
