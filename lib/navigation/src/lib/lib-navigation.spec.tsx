import { render } from '@testing-library/react';

import LibNavigation from './lib-navigation';

describe('LibNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
