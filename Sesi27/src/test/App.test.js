import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Render halaman home dengan benar', () => {
  render(<App />);

  // 1. mencari text tertentu
  const title = screen.getByText(/why do we need test ?/i); // i: case insensitive
  expect(title).toBeInTheDocument();
            // matcher
            // - toBeInTheDocument()
            // - toHaveTextContent()
            // https://jestjs.io/docs/using-matchers


  // 2. mencari button tertentu
  // pastikan button kita memiliki role = "button"
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('User List');

  //3. klik tombol user list (buka halaman user -> pindah halaman)
  fireEvent.click(button)

  // 4. Ambil Tombol ke 2
  const backToHomeButton = screen.getAllByRole('button')
  expect(backToHomeButton).toBeInTheDocument();
  expect(backToHomeButton).toHaveTextContent('Back to Home');




});
