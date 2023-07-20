import { render } from '@testing-library/react';

import LibTypography from './lib-typography';

describe('LibTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibTypography />);
    expect(baseElement).toBeTruthy();
  });
});
