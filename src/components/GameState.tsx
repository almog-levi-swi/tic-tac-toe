import { useState } from "react";

export type Value = 'X' | 'O' | null;
export type BoardState = Value[];

const creatBoardState = () => Array<Value>(9).fill(null);

const calculateWinner = (boardState: BoardState) => {
    const winningOptions: number[][] = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < winningOptions.length; i++) {
        const [a, b, c] = winningOptions[i];

        if(boardState[a] && boardState[a] === boardState[b] && boardState[a] == boardState[c]){
            return{
               type: boardState[a],
               winningIndexes: [a, b, c]
            } 
        }
    }
    return null;
}

export type GameState = {
    history: BoardState[],
    step: number
}

//create custom hook that manage the game state

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>({
        history: [creatBoardState()],
        step: 0
    });

    const current = gameState.history[gameState.step];
    const xIsNext = gameState.step % 2 === 0;
    const winner = calculateWinner(current);

    const handleClick = (square: number) => {
        const history = gameState.history.slice(0, gameState.step + 1);
        const boardState = history[history.length -1];
        if(boardState[square] || winner){
            return;
        }
        const newBoardState = boardState.slice();
        newBoardState[square] = xIsNext ? 'X' : 'O'; 
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1
        })
    }

    const jumpTo = (step: number) => {
        setGameState({
            history: gameState.history,
            step
        });
    }

    return {
        gameState,
        current,
        xIsNext,
        winner,
        handleClick,
        jumpTo
    }

} 
