import { Component, OnInit } from '@angular/core';
import { InputManager } from 'src/domain/input-manager';
import { WordleBoard } from 'src/domain/wordle-board';
import { WordsRepository } from 'src/domain/words-repository';

export const wordsRepository = new WordsRepository(
  require('../../../assets/dic/pt-br-5l-words.json')
);

function createBoard() {
  return new WordleBoard(
    wordsRepository,
    9,
    5,
    wordsRepository.getRandomWord().toUpperCase()
  );
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

  private setupBoardEvents() {
    let completedGames = 0;
    let gameOver = false;
    [this.board1, this.board2, this.board3, this.board4].forEach((board) => {
      board.onFinish(({ status }) => {
        if (status === 'winner') {
          completedGames++;
          if (completedGames === 4) {
            this.showMessage('You win!');
          }
        } else if (status === 'game-over') {
          if (gameOver) return;
          gameOver = true;
          this.showMessage('Game over!');
        }
      });
    });
  }

  constructor() {
    this.inputManager.onConfirm((word: string) => {
      this.board1.addWord(word);
      this.board2.addWord(word);
      this.board3.addWord(word);
      this.board4.addWord(word);
    });

    this.setupBoardEvents();
  }

  ngOnInit(): void {}
}
