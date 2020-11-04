import { render, screen } from '@testing-library/react';
import Element from './Element'

test('renders learn react link', () => {
    render(<Element />);
    const linkElement = screen.getByText(/Hello world/i);
    expect(linkElement).toBeInTheDocument();
});