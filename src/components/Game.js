import React, { useState } from 'react'
import Board from './Board'
import constants from '../constants'
import { calculateWinner, calculateDraw } from '../helpers'

const style = {
  fontSize:'20px',
  fontWeight: '800',
  width: '200px',
  margin: '20px auto'
}

const Game = () => {
  const initialState = Array(9).fill(null)
  const [board, setBoard] = useState(initialState)
  const [nextMove, setNextMove] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = i => {
    const boardCopy = [...board]
    if (winner || boardCopy[i]) return
    boardCopy[i] = nextMove ? constants.PLAYER_X : constants.PLAYER_O
    setBoard(boardCopy)
    setNextMove(!nextMove)
  }

  let status;
  if (winner) {
    status = 'Winner: ' + winner
  }
  else if (calculateDraw(board))  {
    status = 'Game draw'
  }
  else {
    status = constants.PLAYER_NEXT + ' : ' + (nextMove ? constants.PLAYER_X : constants.PLAYER_O)
  }

  const resetHandler = () => {
    setBoard(initialState)
    setNextMove(true)
  }

  return (
    <>
      <div style={style}>{status}</div>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <button style={style} onClick={resetHandler}>{constants.PLAY_AGAIN}</button>
      </div>
    </>
  )
}

export default Game