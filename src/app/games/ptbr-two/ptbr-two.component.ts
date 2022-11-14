import { Component, OnInit } from '@angular/core';
import { InputManager } from 'src/domain/input-manager';
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

  constructor() {
    this.inputManager.onConfirm((word: string) => {
      this.board1.addWord(word);
      this.board2.addWord(word);
    });
  }

  ngOnInit(): void {}
}
