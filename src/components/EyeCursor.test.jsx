import React from 'react';
import { render } from '@testing-library/react';
import EyeCursor from './EyeCursor.jsx';

describe('EyeCursor component', () => {
  it('renders without crashing', () => {
    render(<EyeCursor />);
  });
});
