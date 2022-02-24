import React from 'react';
import { css } from '@emotion/css';
import Square from './Square';
import { BoardState, Value } from './GameState';

interface BoardProps {
    onClick: (square: number) => void, 
    current: BoardState,
    winner: {type: Value, winningIndexes: number[]} | null
}


const Board:React.FC<BoardProps> = (props) => {

    const isWinnerSquare = (index: number) => {
        return props.winner?.winningIndexes.includes(index);
    }

  return (
    <div>
      <div className={classes.row}>
        <Square value={props.current[0]} onClick={() => props.onClick(0)} isWinner={isWinnerSquare(0)}/>
        <Square value={props.current[1]} onClick={() => props.onClick(1)} isWinner={isWinnerSquare(1)}/>
        <Square value={props.current[2]} onClick={() => props.onClick(2)} isWinner={isWinnerSquare(2)}/>
      </div>
      <div className={classes.row}>
        <Square value={props.current[3]} onClick={() => props.onClick(3)} isWinner={isWinnerSquare(3)}/>
        <Square value={props.current[4]} onClick={() => props.onClick(4)} isWinner={isWinnerSquare(4)}/>
        <Square value={props.current[5]} onClick={() => props.onClick(5)} isWinner={isWinnerSquare(5)}/>
      </div>
      <div className={classes.row}>
        <Square value={props.current[6]} onClick={() => props.onClick(6)} isWinner={isWinnerSquare(6)} />
        <Square value={props.current[7]} onClick={() => props.onClick(7)} isWinner={isWinnerSquare(7)}/>
        <Square value={props.current[8]} onClick={() => props.onClick(8)} isWinner={isWinnerSquare(8)}/>
      </div>
    </div>
  )
}

const classes = {
    row: css`
        display: flex;
        flex-direction: row;
    `
}

export default Board
