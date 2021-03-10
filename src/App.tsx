import { useEffect } from "react";
import Board from "./components/Board";
import Header from './components/Header';
import { GameStore } from "./GameStore";

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


function App() {

  useEffect(() => {
    const unsub = GameStore.subscribe(s => s.coordinates, (coordinates, allState) => {
      if (allState.winner) return;

      for (let i = 0; i < possibleWin.length; i++) {
        const [a, b, c] = possibleWin[i];
        if (coordinates[a] === coordinates[b] && coordinates[a] === coordinates[c]) {
          GameStore.update(s => {
            s.winner = coordinates[a]
          })
        }
      }
    })

    return () => {
      unsub()
    }
  }, [])


  return (
    <div
      className="m-auto w-full max-w-xl pt-6"
    >
      <Header />
      <Board />
    </div>
  );
}

export default App;
