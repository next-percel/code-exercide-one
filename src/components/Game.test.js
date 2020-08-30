import React from 'react';
import { shallow } from 'enzyme'
import Board from './Board'
import Game from './Game'
import constants from '../constants'

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
})