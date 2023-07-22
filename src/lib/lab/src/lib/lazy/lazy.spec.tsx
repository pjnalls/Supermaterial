import { render } from '@testing-library/react';

import Lazy from './lazy';

describe('Lazy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lazy />);
    expect(baseElement).toBeTruthy();
  });
});
