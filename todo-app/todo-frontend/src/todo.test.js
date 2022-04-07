import { render, screen } from '@testing-library/react';
import Todo from './Todos/Todo';

const todo = {
  text: 'Test todo',
	complete: false
}

test('renders learn react link', () => {
  const onClickDelete = jest.fn();
	const onClickComplete = jest.fn();

  render(<Todo todo={todo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />)
  const linkElement = screen.getByText(/Test todo/i);
  expect(linkElement).toBeInTheDocument();
});
