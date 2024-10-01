import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

// Mock the BookingForm component to isolate tests
jest.mock('./components/BookingForm', () => () => <div>Mocked Booking Form</div>);

describe('App', () => {
  test('renders the Little Lemon Restaurant header', () => {
    render(<App />);
    expect(screen.getByText(/Little Lemon Restaurant/i)).toBeInTheDocument();
  });

  test('renders the Table Booking Form header', () => {
    render(<App />);
    expect(screen.getByText(/Table Booking Form/i)).toBeInTheDocument();
  });

  test('renders the BookingForm component', () => {
    render(<App />);
    expect(screen.getByText(/Mocked Booking Form/i)).toBeInTheDocument();
  });
});
