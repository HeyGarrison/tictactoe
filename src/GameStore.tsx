import { Store } from "pullstate";

interface IGameStore {
  coordinates: any[];
  player: 'X' | 'O'
  winner: 'X' | 'O' | null
}

const GameStore = new Store<IGameStore>({
  coordinates: ['', '', '', '', '', '', '', '', ''],
  player: 'X',
  winner: null
});


function updateCoordinates(key: number) {
  GameStore.update(s => {
    if (s.winner || s.coordinates[key].length > 0) return s;

    s.coordinates[key] = s.player
    s.player = s.player === 'X' ? 'O' : 'X'
  })
}

function reset() {
  GameStore.update(() => ({
    coordinates: ['', '', '', '', '', '', '', '', ''],
    player: 'X',
    winner: null
  }))
}

const possibleWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function declareWinner(coordinates: IGameStore['coordinates'], allState: IGameStore) {
  if (allState.winner) return;

  for (let i = 0; i < possibleWin.length; i++) {
    const [a, b, c] = possibleWin[i];
    if (coordinates[a] && coordinates[a] === coordinates[b] && coordinates[a] === coordinates[c]) {
      GameStore.update(s => {
        s.winner = coordinates[a]
      })
    }
  }
}

export { updateCoordinates, GameStore, reset, declareWinner }