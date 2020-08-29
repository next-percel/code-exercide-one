import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', ()=> {
  const wrapper = shallow(<App />);
  it('should display header as Tic Tac Toe', ()=> {
    expect(wrapper.find('h1').text()).toBe('Tic Tac Toe');
  });
});
