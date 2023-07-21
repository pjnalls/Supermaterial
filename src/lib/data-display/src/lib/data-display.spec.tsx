import { render } from '@testing-library/react';

import DataDisplay from './data-display';

describe('DataDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
