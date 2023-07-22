import type { Meta } from '@storybook/react';
import { Tooltip } from './tooltip';

const Story: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Tooltip',
};
export default Story;

export const Primary = {
  args: {},
};
