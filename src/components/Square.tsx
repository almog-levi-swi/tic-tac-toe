import React from 'react';
import { css } from '@emotion/css';
import { Value } from './GameState';

interface SquareProps {
    value: Value, 
    onClick: () => void,
    isWinner: boolean | undefined
}

const Square: React.FC<SquareProps> = (props) => {
    // console.log(props.isWinner);
  return (
      <button className={`${classes.btn} ${props.isWinner ? classes.winner : ''}`} onClick={props.onClick}>{props.value}</button>
      )
}

const classes = {
 btn: css`
    width: 50px;
    height: 50px;
    background-color: white;
    font-size: 24px;
 `,
 winner: css`
    color: red;
 `
}

export default Square
