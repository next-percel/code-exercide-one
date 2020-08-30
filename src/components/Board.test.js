import React from 'react';
import { shallow } from 'enzyme'
import Board from './Board'
import Square from './Square'

describe('Board Component', ()=> {
  const wrapper = shallow(<Board squares={Array(9).fill(null)} />)

  it('Should have 1 div in the board', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('Should have 9 Square in the board', () => {
    expect(wrapper.find(Square).length).toEqual(9)
    expect(wrapper.find(Square).at(0).props()).toEqual({
      value: null,
      onClick: expect.any(Function)
    })
  })
})