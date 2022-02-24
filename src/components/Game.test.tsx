import { fireEvent, render, screen } from '@testing-library/react';
import Game from './Game';

describe('When everything is ok', () => {

  test('should X be the first player', () => {
    render(<Game />);

    const btns = screen.getAllByRole<HTMLButtonElement>('button');
    fireEvent.click(btns[0]);//x
    expect(btns[0].textContent).toBe('X');
  });

  test('should simulate victory of X', () => {
      render(<Game />);
    // screen.debug();

    const btns = screen.getAllByRole<HTMLButtonElement>('button');
    expect(btns.length).toBe(10);

    fireEvent.click(btns[0]);//x
    fireEvent.click(btns[1]);//o
    fireEvent.click(btns[4]);//x
    fireEvent.click(btns[2]);//o
    fireEvent.click(btns[8]);//x
    expect(screen.getByText('Winner is X')).toBeInTheDocument();
  });


})
