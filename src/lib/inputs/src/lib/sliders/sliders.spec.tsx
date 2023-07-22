import { render } from '@testing-library/react';

import Sliders from './sliders';

describe('Sliders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sliders />);
    expect(baseElement).toBeTruthy();
  });
});
