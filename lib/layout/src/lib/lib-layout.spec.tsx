import { render } from '@testing-library/react';

import LibLayout from './lib-layout';

describe('LibLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibLayout />);
    expect(baseElement).toBeTruthy();
  });
});
