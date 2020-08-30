import React, { useState } from 'react'
import Board from './Board'
import constants from '../constants'

const style = {
  width: '200px',
  margin: '20px auto'
}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))

  const handleClick = i => {
    const boardCopy = [...board]
    if (boardCopy[i]) return;
    boardCopy[i] = constants.PLAYER_X
    setBoard(boardCopy)
  }

  return (
    <>
      <div style={style}>{`${constants.PLAYER_NEXT} : ${constants.PLAYER_X}`}</div>
      <Board squares={board} onClick={handleClick} />
    </>
  )
}

export default Game