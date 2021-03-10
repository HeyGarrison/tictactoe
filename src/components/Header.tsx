import React from 'react'
import { GameStore } from '../GameStore';


const Header = () => {
  const player = GameStore.useState(s => s.player);
  const winner = GameStore.useState(s => s.winner)

  return (
    <header>
      {(() => {
        if (winner) {
          return <h3>Winner: {winner}</h3>
        }

        return <h3>Next Player: {player}</h3>

      })()}

    </header>
  )
}

export default Header
