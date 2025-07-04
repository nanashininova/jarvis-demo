import React from 'react';
import { render, screen } from '@testing-library/react';
import Domain from './Domain.jsx';

describe('Domain component', () => {
  it('renders without crashing', () => {
    render(<Domain title="Test Domain" />);
  });
});
