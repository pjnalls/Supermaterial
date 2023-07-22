import { render } from '@testing-library/react';

import DataTimePickers from './data-time-pickers';

describe('DataTimePickers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataTimePickers />);
    expect(baseElement).toBeTruthy();
  });
});
