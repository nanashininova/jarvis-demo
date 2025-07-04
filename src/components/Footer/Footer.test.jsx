import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });
});
