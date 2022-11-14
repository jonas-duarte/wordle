import { EventEmitter } from 'events';
import { WordsRepository } from './words-repository';

export type KeyStatus = 'correct' | 'incorrect' | 'displaced';

const STATUS_PRIORITY: KeyStatus[] = ['correct', 'displaced', 'incorrect'];

export class InputManager {
  private _word: string[];
  private _pointer = 0;
  private inputEvents: EventEmitter = new EventEmitter();
  constructor(
    private wordsRepository: WordsRepository,
    public readonly wordSize: number
  ) {
    this._word = new Array(wordSize);
  }

  get layout(): string[][] {
    return [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'BACKSPACE'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
    ];
  }

  isKeyInLayout(key: string): boolean {
    return this.layout.flat().includes(key.toUpperCase());
  }

  get word(): string[] {
    return this._word;
  }

  handleKey(key: string) {
    if (this.isKeyInLayout(key)) {
      switch (key.toUpperCase()) {
        case 'BACKSPACE':
          this._word[this._pointer] = '';
          this._pointer = Math.max(0, this._pointer - 1);
          break;
        case 'ENTER':
          this.handleEnter();
          break;
        default:
          if (this.layout.flat().includes(key.toUpperCase())) {
            this._word[this._pointer] = key.toUpperCase();
            this._pointer = Math.min(this.wordSize - 1, this._pointer + 1);
          }
      }
    }
  }

  get pointer(): number {
    return this._pointer;
  }

  set pointer(value: number) {
    this._pointer = value;
  }

  public onConfirm(callback: (word: string) => void) {
    this.inputEvents.on('input:confirm', callback);
  }

  private handleEnter() {
    if (!this.wordsRepository.isWordValid(this._word.join(''))) return;
    this.inputEvents.emit('input:confirm', this._word.join(''));
    this._pointer = 0;
    this._word = new Array(this.wordSize);
  }

  private _keyStatus = new Map<string, KeyStatus[]>();
  public setKeyStatus(
    key: string,
    status: KeyStatus,
    position: [number, number]
  ) {
    const [slice, total] = position;
    const _key = key.toUpperCase();
    const value =
      this._keyStatus.get(_key) || new Array(total).fill('incorrect');
    const newStatusPriority = STATUS_PRIORITY.indexOf(status);
    const currentStatusPriority = STATUS_PRIORITY.indexOf(value[slice]);
    if (newStatusPriority > currentStatusPriority) return;
    value[slice] = status;
    this._keyStatus.set(_key, value);
  }

  public getHigherKeyStatus(key: string): KeyStatus | null {
    const value = this._keyStatus.get(key.toUpperCase());
    if (!value) return null;
    return value.reduce((acc, curr) => {
      const accPriority = STATUS_PRIORITY.indexOf(acc);
      const currPriority = STATUS_PRIORITY.indexOf(curr);
      return accPriority < currPriority ? acc : curr;
    });
  }

  public clearKeyStatus(gameSlot: number) {
    this._keyStatus.forEach((value, key) => {
      value[gameSlot] = 'incorrect';
      this._keyStatus.set(key, value);
    });
  }
}
