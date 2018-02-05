/* eslint-disable */
import React from 'react'
import Welcome from './Welcome';
import { shallow } from 'enzyme';
import { mockCleanFilmData } from '../mock-data';

describe('WELCOME', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Welcome film={mockCleanFilmData} />)

    expect(wrapper).toMatchSnapshot();
  });
});