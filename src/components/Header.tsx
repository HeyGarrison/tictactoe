import React from 'react'
import { GameStore } from '../GameStore';


const Header = () => {
  const player = GameStore.useState(s => s.player);
  const winner = GameStore.useState(s => s.winner)

  return (
    <header>
      <div className="pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {(() => {
            if (winner) {
              return <span className="text-3xl">Player {winner} wins!</span>
            }

            return <React.Fragment>Next Player: {player}</React.Fragment>

          })()}
        </h3>
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Start over
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header
