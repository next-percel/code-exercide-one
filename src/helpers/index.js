export const calculateWinner = board => {
  if (board[0] && board[0] === board[1] && board[0] === board[2]) {
    return board[0]
  }
}