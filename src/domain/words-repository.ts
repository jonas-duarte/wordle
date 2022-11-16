interface Words {
  key: string;
  value: string;
  common?: boolean;
}

// TODO: maybe we could request direct from the website
// https://www.linguateca.pt/acesso/ordenador.php
export class WordsRepository {
  private words: Map<string, string>;
  private commonWords: string[];

  constructor(dictionary: Words[]) {
    this.words = new Map(dictionary.map((word) => [word.key, word.value]));
    this.commonWords = dictionary
      .filter((word) => word.common)
      .map((word) => word.key);
  }

  public getWord(word: string): string {
    return this.words.get(word.toLowerCase())?.toUpperCase() || word;
  }

  public isWordValid(word: string): boolean {
    return this.words.get(word.toLowerCase()) !== undefined;
  }

  public getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.commonWords.length);
    return this.commonWords[randomIndex];
  }
}
