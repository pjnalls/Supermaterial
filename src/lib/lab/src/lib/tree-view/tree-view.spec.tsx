import { render } from '@testing-library/react';

import TreeView from './tree-view';

describe('TreeView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TreeView />);
    expect(baseElement).toBeTruthy();
  });
});
