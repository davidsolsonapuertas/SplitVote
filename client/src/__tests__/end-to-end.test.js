import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import App from '../App.js';

describe('End to end test', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Should be able to create a user, drag and drop it into a box and see that the booking has been successful', async () => {
    fireEvent.click(screen.getByText(/add user/i));

    fireEvent.change(screen.getByPlaceholderText(/name/i), {
      target: { value: 'David Solsona' },
    });
    fireEvent.change(screen.getByPlaceholderText(/pet type/i), {
      target: { value: 'Dog' },
    });
    fireEvent.click(screen.getByText(/add user/i));

    const newUser = screen.getByText(/David Solsona/i);
    const randomDay = screen.getByText(/Friday/i);

    fireEvent.dragStart(newUser);
    fireEvent.dragEnter(randomDay);
    fireEvent.dragOver(randomDay);
    fireEvent.drop(randomDay);

    fireEvent.click(screen.getByText(/book your appointment/i));
    const bookingSuccessfulMessage = screen.getByText(
      /You have successfully booked your appointment/i,
    );

    const data = JSON.parse(localStorage.getItem('data'));

    expect(bookingSuccessfulMessage).toBeInTheDocument();
    expect(data[5].users[0].username).toBe('David Solsona');
    expect(data[5].users[0].pet).toBe('Dog');
  });
});
