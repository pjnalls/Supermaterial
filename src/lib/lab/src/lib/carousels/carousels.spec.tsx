import { render } from '@testing-library/react';

import Carousels from './carousels';

describe('Carousels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Carousels />);
    expect(baseElement).toBeTruthy();
  });
});
