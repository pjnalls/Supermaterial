import type { Meta } from '@storybook/react';
import { FloatingActionButton } from './floating-action-button';

const Story: Meta<typeof FloatingActionButton> = {
  component: FloatingActionButton,
  title: 'FloatingActionButton',
};
export default Story;

export const Primary = {
  args: {},
};
