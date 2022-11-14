import { InputManager } from 'src/domain/input-manager';
import { Component, Input, OnInit } from '@angular/core';
import { WordleBoard } from 'src/domain/wordle-board';

// board
// rows
// collumns
// correctWord

@Component({
  selector: 'app-wordle-board',
  templateUrl: './wordle-board.component.html',
  styleUrls: ['./wordle-board.component.scss'],
})
export class WordleBoardComponent implements OnInit {
  @Input() board!: WordleBoard;
  @Input() inputManager!: InputManager;

  constructor() {}

  ngOnInit(): void {}

  get _board(): string[][] {
    const board = this.board.display;
    if (this.board.isComplete()) {
      const filler = new Array(
        Math.max(0, this.board.size - board.length)
      ).fill(new Array(this.board.wordSize).fill(''));
      return [...board, ...filler];
    } else {
      const inputWord = this.inputManager.word;
      const filler = new Array(
        Math.max(0, this.board.size - board.length - 1)
      ).fill(new Array(this.board.wordSize).fill(''));
      return [...board, inputWord, ...filler];
    }
  }

  handleCellClick(row: number, column: number) {
    if (this.board.isComplete()) return;
    this.inputManager.pointer = column;
  }

  getCellClass(row: number, column: number): string[] {
    if (this.board.isComplete() && row >= this.board.display.length)
      return ['disabled'];

    if (row === this.board.currentRow) {
      return column === this.inputManager.pointer
        ? ['selected', 'focused']
        : ['selected'];
    }

    if (row > this.board.currentRow) {
      return ['disabled'];
    }

    switch (this.board.validation[row][column]) {
      case 'correct':
        return ['correct'];
      case 'displaced':
        return ['displaced'];
      case 'incorrect':
        return ['incorrect'];
    }

    return [];
  }
}
