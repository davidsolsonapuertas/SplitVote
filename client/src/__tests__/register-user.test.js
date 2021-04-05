import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import App from '../App.js';

describe('Register user', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Add user card shows a form when clicked "Add User"', async () => {
    fireEvent.click(screen.getByText(/add user/i));
    const imageUploader = screen.getByText(/click or drop an image/i);
    const inputName = screen.getByPlaceholderText(/name/i);
    const inputPet = screen.getByPlaceholderText(/pet/i);

    expect(imageUploader).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputPet).toBeInTheDocument();
  });

  it('Should be able to register a new client', async () => {
    fireEvent.click(screen.getByText(/add user/i));

    fireEvent.change(screen.getByPlaceholderText(/name/i), {
      target: { value: 'David Solsona' },
    });
    fireEvent.change(screen.getByPlaceholderText(/pet type/i), {
      target: { value: 'dog' },
    });
    fireEvent.click(screen.getByText(/add user/i));

    const newUser = screen.getByText(/David Solsona/i);
    expect(newUser).toMatchInlineSnapshot(`
    <h2>
      David Solsona
    </h2>
  `);
  });
});
