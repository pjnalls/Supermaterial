import { render } from '@testing-library/react';

import Selects from './selects';

describe('Selects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Selects />);
    expect(baseElement).toBeTruthy();
  });
});
