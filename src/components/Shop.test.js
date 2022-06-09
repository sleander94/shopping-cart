import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Shop from './Shop';

describe('Shop component', () => {
  it('renders correctly', () => {
    const shop = renderer.create(<Shop />);
    expect(shop).toMatchSnapshot();
  });
});
