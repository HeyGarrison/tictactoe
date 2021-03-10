import { useEffect } from 'react';
import { GameStore, updateCoordinates, declareWinner } from '../GameStore'



const Board = () => {
  const coordinates = GameStore.useState(s => s.coordinates);

  useEffect(() => {
    const unsub = GameStore.subscribe(s => s.coordinates, declareWinner)

    return () => {
      unsub()
    }
  }, [])

  return (
    <div className="grid grid-cols-3 border">
      {coordinates.map((item, key) => (
        <button
          onClick={() => updateCoordinates(key)}
          key={key}
          className="h-48 border text-gray-800 text-5xl focus:outline-none "
          disabled={item.length > 0}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Board
