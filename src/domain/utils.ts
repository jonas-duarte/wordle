import { InputManager } from './input-manager';
import { WordleBoard } from './wordle-board';

export function bindBoardsToInputManager(
  boards: WordleBoard[],
  inputManager: InputManager
) {
  boards.forEach((board, bIndex) => {
    board.onWordAdded((word, validation) => {
      word.split('').forEach((letter, index) => {
        inputManager.setKeyStatus(letter, validation[index], [
          bIndex,
          boards.length,
        ]);
      });
    });

    board.onFinish(() => {
      inputManager.clearKeyStatus(bIndex);
    });
  });

  inputManager.onConfirm((word: string) => {
    boards.forEach((board) => board.addWord(word));
  });
}

export function waitForBoardsResult(
  boards: WordleBoard[]
): Promise<'winner' | 'game-over'> {
  return new Promise((resolve) => {
    let completedGames = 0;
    boards.forEach((board) => {
      board.onFinish(({ status }) => {
        if (status === 'winner') {
          completedGames++;
          if (completedGames === boards.length) {
            return resolve('winner');
          }
        } else if (status === 'game-over') {
          return resolve('game-over');
        }
      });
    });
  });
}
