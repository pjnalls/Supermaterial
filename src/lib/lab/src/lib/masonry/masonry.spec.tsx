import { render } from '@testing-library/react';

import Masonry from './masonry';

describe('Masonry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Masonry />);
    expect(baseElement).toBeTruthy();
  });
});
