import { Component } from '@angular/core';

interface Words {
  key: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private words: Map<string, string>;
  correctWord: string;
  constructor() {
    const dictionary: Words[] = require('../assets/dic/pt-br-5l-words.json');
    this.words = new Map(dictionary.map((word) => [word.key, word.value]));
    this.correctWord =
      dictionary[
        Math.floor(Math.random() * dictionary.length)
      ].key.toUpperCase();
  }

  title = 'wordle';
  rows = 6;
  _board: string[][] = [];

  currentWord = ['', '', '', '', ''];
  currentLetterIndex = 0;

  get board() {
    const filler = Array(this.rows - this._board.length).fill([
      '',
      '',
      '',
      '',
      '',
    ]);
    return [...this._board, this.currentWord, ...filler];
  }

  get currentRow() {
    return this._board.length;
  }

  private getWordFromDictionary(word: string): string | null {
    return this.words.get(word.toLowerCase())?.toUpperCase() || null;
  }

  onKeyClick(key: string) {
    if (key === 'BACKSPACE') {
      this.currentWord[this.currentLetterIndex] = '';
      this.currentLetterIndex = Math.max(this.currentLetterIndex - 1, 0);
    } else if (key === 'ENTER') {
      const word = this.getWordFromDictionary(this.currentWord.join(''));
      if (word) {
        this.currentLetterIndex = 0;
        this._board.push(word.split(''));
        this.currentWord = ['', '', '', '', ''];
      }
    } else {
      this.currentWord[this.currentLetterIndex] = key;
      this.currentLetterIndex = Math.min(this.currentLetterIndex + 1, 4);
    }
  }

  onCellClick(celPosition: { row: number; column: number }) {
    this.currentLetterIndex = celPosition.column;
  }
}
