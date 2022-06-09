import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const home = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(home).toMatchSnapshot();
  });

  it('links to store', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole('link'));
    expect(window.location.href).toContain('/shop');
  });
});
