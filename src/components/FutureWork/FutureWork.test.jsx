import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FutureWork from './FutureWork.jsx';

describe('FutureWork component', () => {
  it('renders title and subtitle', () => {
    render(
      <MemoryRouter>
        <FutureWork
          image1="/future-work-1.png"
          image2="/future-work-2.png"
          title="Future Work Title"
          subtitle="Future Subtitle"
        />
      </MemoryRouter>
    );
    expect(screen.getByText('Future Work Title')).toBeInTheDocument();
    expect(screen.getByText('Future Subtitle')).toBeInTheDocument();
  });
});
