/* eslint-disable */
import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('CARD', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to list all the key value pairs of an object', () => {

  })

  it('should call saveFavorite on button click', () => {

  });
});