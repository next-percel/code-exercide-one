import React, { useState } from 'react'
import Board from './Board'
import constants from '../constants'
import { calculateWinner } from '../helpers'

const style = {
  width: '200px',
  margin: '20px auto'
}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
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
  else {
    status = constants.PLAYER_NEXT + ' : ' + (nextMove ? constants.PLAYER_X : constants.PLAYER_O)
  }

  return (
    <>
      <div style={style}>{status}</div>
      <Board squares={board} onClick={handleClick} />
    </>
  )
}

export default Game