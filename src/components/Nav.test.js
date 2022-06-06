import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
  it('renders h1 and Link div', () => {
    const { nav } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(nav).toMatchSnapshot();
  });

  it('renders correct title', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(getByRole('heading').textContent).toMatch(/outdoor store/i);
  });

  it('renders 3 Links', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(getAllByRole('link').length).toBe(3);
  });

  it('renders Links with correct names', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(getAllByRole('link')[0].textContent).toMatch(/home/i);
    expect(getAllByRole('link')[1].textContent).toMatch(/shop/i);
    expect(getAllByRole('link')[2].textContent).toMatch(/about/i);
  });
});
