import type { Meta } from '@storybook/react';
import { Lazy } from './lazy';

const Story: Meta<typeof Lazy> = {
  component: Lazy,
  title: 'Lazy',
};
export default Story;

export const Primary = {
  args: {},
};
