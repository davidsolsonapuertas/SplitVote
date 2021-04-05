import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App.js';

describe('Shows data', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Should always contain data in the local storage', async () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const doesDataHaveUsers = Array.isArray(data[0].users);

    expect(doesDataHaveUsers).toBe(true);
  });

  it('Should display the data', async () => {
    const randomUser = screen.getByText(/Andrew Spencer/i);

    expect(randomUser).toBeInTheDocument();
  });
});
