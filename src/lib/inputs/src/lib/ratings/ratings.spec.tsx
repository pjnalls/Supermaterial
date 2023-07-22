import { render } from '@testing-library/react';

import Ratings from './ratings';

describe('Ratings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ratings />);
    expect(baseElement).toBeTruthy();
  });
});
