import type { Meta } from '@storybook/react';
import { Components } from './components';

const Story: Meta<typeof Components> = {
  component: Components,
  title: 'Data Grid/Components',
};
export default Story;

export const Primary = {
  args: {},
};
