import { render } from '@testing-library/react';

import Lab from './lab';

describe('Lab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lab />);
    expect(baseElement).toBeTruthy();
  });
});
