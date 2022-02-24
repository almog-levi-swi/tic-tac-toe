import React from 'react'
import Board from './Board';
import Log from './Log';
import { css } from '@emotion/css';
import { useGameState } from './GameState';

const Game: React.FC = () => {

    const {gameState, current, xIsNext, winner, handleClick, jumpTo } = useGameState();

  return (
      <div className={classes.center}>
          <div>
              {
                  winner ? `Winner is ${winner.type}` : `Next player ${xIsNext ? 'X' : 'O'}` 
              }
          </div>
          <div className={classes.game}>
            <Board onClick={handleClick} current={current} winner={winner}/>
            <Log history={gameState.history} jumpTo={jumpTo}/>
          </div>
      </div>
  )
}

const classes = { 
    center: css`
        position: relative;
        top: 130px;
        left: 130px
    `,
    game: css`
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `
}

export default Game
