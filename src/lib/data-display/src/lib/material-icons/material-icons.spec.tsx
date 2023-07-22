import { render } from '@testing-library/react';

import MaterialIcons from './material-icons';

describe('MaterialIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MaterialIcons />);
    expect(baseElement).toBeTruthy();
  });
});
