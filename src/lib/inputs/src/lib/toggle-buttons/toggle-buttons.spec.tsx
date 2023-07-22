import { render } from '@testing-library/react';

import ToggleButtons from './toggle-buttons';

describe('ToggleButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleButtons />);
    expect(baseElement).toBeTruthy();
  });
});
