import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';
import {
  mockCleanFilmData,
  mockCleanPlanetData
} from '../mock-data'

describe('MAIN', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Main film={mockCleanFilmData} data={mockCleanPlanetData}/>)
  });

  it('should have a default path of / which renders a Welcome component', () => {

  });

  it('should have different paths which render different CardContainers', () => {

  });
});