import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
  it('renders correctly', () => {
    const nav = renderer.create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(nav).toMatchSnapshot();
  });

  it('routes correct on click', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole('link', { name: 'Home' }));
    expect(window.location.href).toContain('/home');
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    expect(window.location.href).toContain('/shop');
    userEvent.click(screen.getByRole('link', { name: 'About' }));
    expect(window.location.href).toContain('/about');
    userEvent.click(screen.getByRole('link', { name: 'Outdoor Store' }));
    expect(window.location.href).toContain('/home');
  });
});
