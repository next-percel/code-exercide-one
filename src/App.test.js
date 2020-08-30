import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Game from './components/Game'

describe('App Component', ()=> {
  const wrapper = shallow(<App />);
  it('should contain 1 Game component', ()=> {
    expect(wrapper.find(Game).length).toEqual(1);
  });
});
