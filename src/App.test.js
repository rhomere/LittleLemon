import { fireEvent, render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
  // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);


})

test('Navigation links open their dedicated pages', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const navigation = within(screen.getByRole('navigation'));

  fireEvent.click(navigation.getByRole('link', { name: 'About' }));
  expect(screen.getByRole('heading', { name: 'About Little Lemon' })).toBeInTheDocument();

  fireEvent.click(navigation.getByRole('link', { name: 'Menu' }));
  expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument();

  fireEvent.click(navigation.getByRole('link', { name: 'Reservations' }));
  expect(screen.getByLabelText('Choose Date')).toBeInTheDocument();

  fireEvent.click(navigation.getByRole('link', { name: 'Order Online' }));
  expect(screen.getByRole('heading', { name: 'Order Online' })).toBeInTheDocument();

  fireEvent.click(navigation.getByRole('link', { name: 'Login' }));
  expect(screen.getByRole('heading', { name: 'Welcome Back' })).toBeInTheDocument();
});