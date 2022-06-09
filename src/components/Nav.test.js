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

  it('renders 4 Links', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(getAllByRole('link').length).toBe(4);
  });

  it('renders Links with correct text', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(getAllByRole('link')[0].textContent).toMatch(/outdoor store/i);
    expect(getAllByRole('link')[1].textContent).toMatch(/home/i);
    expect(getAllByRole('link')[2].textContent).toMatch(/shop/i);
    expect(getAllByRole('link')[3].textContent).toMatch(/about/i);
  });
});
