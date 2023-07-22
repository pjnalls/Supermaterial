import type { Meta } from '@storybook/react';
import { Box } from './box';

const Story: Meta<typeof Box> = {
  component: Box,
  title: 'Layout/Box',
};
export default Story;

export const Primary = {
  args: {},
};
