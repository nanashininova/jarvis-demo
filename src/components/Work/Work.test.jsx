import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Work from './Work.jsx';

describe('Work component', () => {
  it('renders title and subtitle', () => {
    render(
      <MemoryRouter>
        <Work
          image1="/future-work-1.png"
          image2="/future-work-2.png"
          title="VR BASED PHOBIA THERAPY"
          subtitle="VR + PSYCHOLOGY"
        />
      </MemoryRouter>
    );
    expect(screen.getByText('VR BASED PHOBIA THERAPY')).toBeInTheDocument();
    expect(screen.getByText('VR + PSYCHOLOGY')).toBeInTheDocument();
  });
});
