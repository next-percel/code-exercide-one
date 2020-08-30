import React, { useState } from 'react'
import Board from './Board'
import constants from '../constants'

const style = {
  width: '200px',
  margin: '20px auto'
}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [nextMove, setNextMove] = useState(true)

  const handleClick = i => {
    const boardCopy = [...board]
    if (boardCopy[i]) return;
    boardCopy[i] = nextMove ? constants.PLAYER_X : constants.PLAYER_O
    setBoard(boardCopy)
    setNextMove(!nextMove)
  }

  return (
    <>
      <div style={style}>{constants.PLAYER_NEXT + ' : ' + (nextMove ? constants.PLAYER_X : constants.PLAYER_O) }</div>
      <Board squares={board} onClick={handleClick} />
    </>
  )
}

export default Game