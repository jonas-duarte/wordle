import { WordsRepository } from './words-repository';

export class WordleBoard {
  private rowPointer = 0;
  private words: string[] = [];
  private _validation: string[][] = [];
  constructor(
    private readonly wordsRepository: WordsRepository,
    public readonly size: number,
    public readonly wordSize: number,
    private readonly answer: string
  ) {}

  public get rows(): string[][] {
    return this.words.map((word) => word.split(''));
  }

  public get display(): string[][] {
    return this.words.map((word) =>
      this.wordsRepository.getWord(word.toLowerCase()).toUpperCase().split('')
    );
  }

  get currentRow(): number {
    return this.rowPointer;
  }

  get validation(): string[][] {
    return this._validation;
  }

  private validateWord(word: string): string[] {
    const answer = this.answer.split('');
    const statusMap = answer.map(() => 'unknown');
    const _word = word.toUpperCase().split('');

    // Check correct letters
    for (let column = 0; column < this.wordSize; column++) {
      const letter = _word[column];
      const correctLetter = answer[column];
      if (letter === correctLetter) {
        statusMap[column] = 'correct';
      }
    }

    // Check displaced letters
    const displacedLetters = new Map<string, number>();

    answer
      .filter((letter, index) => statusMap[index] === 'unknown')
      .forEach((letter) => {
        displacedLetters.set(letter, (displacedLetters.get(letter) || 0) + 1);
      });

    for (let column = 0; column < this.wordSize; column++) {
      if (statusMap[column] !== 'unknown') continue;
      const letter = _word[column];
      const letterCounter = displacedLetters.get(letter) || 0;
      if (letterCounter > 0) {
        statusMap[column] = 'displaced';
        displacedLetters.set(letter, letterCounter - 1);
      }
    }

    const rowValidation = statusMap.map((status) =>
      status === 'unknown' ? 'incorrect' : status
    );

    return rowValidation;
  }

  private _isComplete = false;
  isComplete(): boolean {
    return this._isComplete;
  }

  public addWord(word: string) {
    if (this._isComplete) return;

    const wordValidation = this.validateWord(word);
    this.words.push(word);
    this._validation.push(wordValidation);
    this.rowPointer++;
    if (this.rowPointer >= this.size) {
      this._isComplete = true;
    }
    if (word === this.answer) {
      this._isComplete = true;
    }
  }
}
