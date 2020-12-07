import React from 'react'
import renderer from 'react-test-renderer'
import render from '@testing-library/react'

import { Home } from '../components/pagebox'
 
describe('Counter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});