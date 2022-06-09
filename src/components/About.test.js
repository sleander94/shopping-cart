import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import About from './About';

describe('About component', () => {
  it('renders correctly', () => {
    const about = renderer.create(<About />);
    expect(about).toMatchSnapshot();
  });
});
