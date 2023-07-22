import { render } from '@testing-library/react';

import BottomSheets from './bottom-sheets';

describe('BottomSheets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomSheets />);
    expect(baseElement).toBeTruthy();
  });
});
