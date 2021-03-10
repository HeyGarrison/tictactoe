import { useEffect } from "react";
import Board from "./components/Board";
import Header from './components/Header';
import { declareWinner, GameStore } from "./GameStore";




function App() {

  useEffect(() => {
    const unsub = GameStore.subscribe(s => s.coordinates, declareWinner)

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
