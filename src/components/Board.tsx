import React, { useCallback } from 'react'
import { GameStore } from '../GameStore'



const Board = () => {
  const coordinates = GameStore.useState(s => s.coordinates);

  const handleClick = useCallback((key) => {
    GameStore.update(s => {
      if (s.winner || s.coordinates[key].length > 0) return s;
      s.coordinates[key] = s.player
      s.player = s.player === 'X' ? 'O' : 'X'
    })
  }, [])

  return (
    <div className="grid grid-cols-3 border">
      {coordinates.map((item, key) => (
        <button
          onClick={() => handleClick(key)}
          key={key}
          className="h-48 border text-gray-800 text-5xl"
          disabled={item.length > 0}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Board
