export const calculateWinner = board => {
  if (board[0] && board[0] === board[1] && board[0] === board[2]) {
    return board[0]
  }
  if (board[3] && board[3] === board[4] && board[3] === board[5]) {
    return board[3]
  }
  if (board[6] && board[6] === board[7] && board[6] === board[8]) {
    return board[6]
  }
  if (board[0] && board[0] === board[3] && board[0] === board[6]) {
    return board[0]
  }
}