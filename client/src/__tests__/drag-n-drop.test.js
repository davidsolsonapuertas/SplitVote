import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App.js';

describe('Drag and drop', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Drag and drop should work', async () => {
    const randomUser = screen.getByText(/Mary Peters/i);
    const randomDay = screen.getByText(/Friday/i);

    fireEvent.dragStart(randomUser);
    fireEvent.dragEnter(randomDay);
    fireEvent.dragOver(randomDay);
    fireEvent.drop(randomDay);

    const data = JSON.parse(localStorage.getItem('data'));

    expect(data[5].users[0].username).toBe('Mary Peters');
  });
});
