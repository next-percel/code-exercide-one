import React from 'react'

const style = {
  fontSize:'30px',
  fontWeight: '800',
  outline: 'none'
}

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
)

export default Square