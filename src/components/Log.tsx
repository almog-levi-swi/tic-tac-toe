import React from 'react'
import { BoardState } from './GameState'

interface LogProps {
    history: BoardState[],
    jumpTo: (step: number) => void
}

const Log: React.FC<LogProps> = (props) => {
  return (
    <div>
      <ol>
          {
              props.history.map((state, i) => {
                  return (
                      <li key={i}>
                          <button onClick={() => props.jumpTo(i)}>Go to {i === 0 ? 'start' : `move ${i}`}</button>
                      </li>
                  );
              })
          }
      </ol>
    </div>
  )
}

export default Log
