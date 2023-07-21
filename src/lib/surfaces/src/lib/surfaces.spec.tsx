import { render } from '@testing-library/react';

import Surfaces from './surfaces';

describe('Surfaces', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Surfaces />);
    expect(baseElement).toBeTruthy();
  });
});
