import React from 'react';
import { render } from '@testing-library/react';
import CustomCursor from './CustomCursor.jsx';

describe('CustomCursor component', () => {
  it('renders without crashing', () => {
    render(<CustomCursor type="circle" />);
  });
});
