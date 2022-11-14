interface Words {
  key: string;
  value: string;
}

export class WordsRepository {
  private words: Map<string, string>;

  constructor(dictionary: Words[]) {
    this.words = new Map(dictionary.map((word) => [word.key, word.value]));
  }

  public getWord(word: string): string {
    return this.words.get(word.toLowerCase())?.toUpperCase() || word;
  }

  public isWordValid(word: string): boolean {
    return this.words.get(word.toLowerCase()) !== undefined;
  }

  public getRandomWord(): string {
    const words = Array.from(this.words.keys());
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
}
