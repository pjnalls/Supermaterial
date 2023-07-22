import { render } from '@testing-library/react';

import Footers from './footers';

describe('Footers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footers />);
    expect(baseElement).toBeTruthy();
  });
});
