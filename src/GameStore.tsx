import { Store } from "pullstate";

interface IGameStore {
  coordinates: any[];
  player: 'X' | 'O'
  winner: 'X' | 'O' | null
}

export const GameStore = new Store<IGameStore>({
  coordinates: ['', '', '', '', '', '', '', '', ''],
  player: 'X',
  winner: null
});