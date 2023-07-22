import { render } from '@testing-library/react';

import Parallax from './parallax';

describe('Parallax', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Parallax />);
    expect(baseElement).toBeTruthy();
  });
});
