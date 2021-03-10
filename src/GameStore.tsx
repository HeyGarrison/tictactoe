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

export { updateCoordinates, GameStore, reset }