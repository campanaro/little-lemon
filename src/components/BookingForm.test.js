import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders booking form', () => {
    render(<BookingForm />);
    expect(screen.getByText(/Booking Form/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  });

  test('validates form fields', () => {
    render(<BookingForm />);

    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
  });

  test('validates email format', () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'invalidEmail' },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.getByText(/Email is invalid/i)).toBeInTheDocument();
  });

  test('submits valid form', () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-10-01' } });
    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Date is required/i)).not.toBeInTheDocument();
  });
});
