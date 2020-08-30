import React from 'react';
import { shallow } from 'enzyme'
import Board from './Board'
import Game from './Game'
import constants from '../constants'
import { calculateWinner, calculateDraw } from '../helpers'
 
describe('Game component', () => {
  const wrapper = shallow(<Game />)

  it('Should have 1 Fragment in the Game', () => {
    expect(wrapper.find('Fragment').length).toEqual(1)
  })

  it('Should have 2 div in the Game', () => {
    expect(wrapper.find('div').length).toEqual(2)
    expect(wrapper.find('div').at(0).text()).toEqual(`${constants.PLAYER_NEXT} : ${constants.PLAYER_X}`)
  })

  it('Should have 1 Board in the Game', () => {
    expect(wrapper.find(Board).length).toEqual(1)
  })

  it('should display winner if player able to draw 3 "X" in a first row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_X, 0, 3))
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a first row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_O, 0, 3))
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" in a second row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_X, 3, 6))
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a second row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_O, 3, 6))
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" in a third row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_X, 6, 9))
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a third row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_O, 6, 9))
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" in a first column', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_X, 0, 1)
              .fill(constants.PLAYER_X, 3, 4)
              .fill(constants.PLAYER_X, 6, 7)
    )
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a first column', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_O, 0, 1)
              .fill(constants.PLAYER_O, 3, 4)
              .fill(constants.PLAYER_O, 6, 7)
    )
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" in a second column', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_X, 1, 2)
              .fill(constants.PLAYER_X, 4, 5)
              .fill(constants.PLAYER_X, 7, 8)
    )
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a second column', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_O, 1, 2)
              .fill(constants.PLAYER_O, 4, 5)
              .fill(constants.PLAYER_O, 7, 8)
    )
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" in a third column', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_X, 2, 3)
              .fill(constants.PLAYER_X, 5, 6)
              .fill(constants.PLAYER_X, 8, 9)
    )
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a third column', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_O, 2, 3)
              .fill(constants.PLAYER_O, 5, 6)
              .fill(constants.PLAYER_O, 8, 9)
    )
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" diagonally from top-left to bottom-right', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_X, 0, 1)
              .fill(constants.PLAYER_X, 4, 5)
              .fill(constants.PLAYER_X, 8, 9)
    )
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" diagonally from top-left to bottom-right', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_O, 0, 1)
              .fill(constants.PLAYER_O, 4, 5)
              .fill(constants.PLAYER_O, 8, 9)
    )
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" diagonally from top-right to bottom-left', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_X, 2, 3)
              .fill(constants.PLAYER_X, 4, 5)
              .fill(constants.PLAYER_X, 6, 7)
    )
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" diagonally from top-right to bottom-left', () => {
    const winner = calculateWinner(
      Array(9).fill(constants.PLAYER_O, 2, 3)
              .fill(constants.PLAYER_O, 4, 5)
              .fill(constants.PLAYER_O, 6, 7)
    )
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display game as draw if all nine squares are filled and no winner', () => {
    const gameDraw = calculateDraw(['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'])
    expect(gameDraw).toEqual(true)
  })

  it('should not display game as draw otherwise', () => {
    const gameDraw = calculateDraw([])
    expect(gameDraw).toEqual(false)
  })

  it("Should have Play again button", () => {
    const button = wrapper.find('button')
    expect(button.length).toEqual(1)
    expect(wrapper.find('button').text()).toEqual(constants.PLAY_AGAIN)
  })
})