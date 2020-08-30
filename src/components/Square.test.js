import React from 'react'
import { shallow } from 'enzyme'
import Square from './Square'
import constants from '../constants'

const onClick = jest.fn()
const props = {value: constants.PLAYER_X, onClick }
describe('Square Component', ()=> {
  const wrapper = shallow(<Square {...props} />)

  it('Should have square button', () => {
    expect(wrapper.find('button').length).toEqual(1)
  })   

  it('should call onClick when click on Square button', () => {
    const button = wrapper.find('button')
    button.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(wrapper.find('button').text()).toEqual(constants.PLAYER_X);
  })

  it('should display O when click on Square button', () => {
    const _props = {...props,  value: constants.PLAYER_O }
    const wrapper = shallow(<Square {..._props} />)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(2)
    expect(wrapper.find('button').text()).toEqual(constants.PLAYER_O);
  })
})