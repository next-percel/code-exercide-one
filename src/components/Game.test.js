import React from 'react';
import { shallow } from 'enzyme'
import Board from './Board'
import Game from './Game'
import constants from '../constants'
import { calculateWinner } from '../helpers'
 
describe('Game component', () => {
  const wrapper = shallow(<Game />)

  it('Should have 1 Fragment in the Game', () => {
    expect(wrapper.find('Fragment').length).toEqual(1)
  })

  it('Should have 1 div in the Game', () => {
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('div').text()).toEqual(`${constants.PLAYER_NEXT} : ${constants.PLAYER_X}`)
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

  it('should display winner if player able to draw 3 "X" in a first row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_X, 3, 6))
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a first row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_O, 3, 6))
    expect(winner).toEqual(constants.PLAYER_O)
  })

  it('should display winner if player able to draw 3 "X" in a first row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_X, 6, 9))
    expect(winner).toEqual(constants.PLAYER_X)
  })

  it('should display winner if player able to draw 3 "O" in a first row', () => {
    const winner = calculateWinner(Array(9).fill(constants.PLAYER_O, 6, 9))
    expect(winner).toEqual(constants.PLAYER_O)
  })
})