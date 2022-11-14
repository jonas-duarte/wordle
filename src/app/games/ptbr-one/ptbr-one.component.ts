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

  constructor() {
    this.inputManager.onConfirm((word: string) => {
      this.board.addWord(word);
    });
  }

  ngOnInit(): void {}
}
