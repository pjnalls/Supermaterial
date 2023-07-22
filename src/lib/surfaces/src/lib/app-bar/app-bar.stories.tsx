import type { Meta } from '@storybook/react';
import { AppBar } from './app-bar';

const Story: Meta<typeof AppBar> = {
  component: AppBar,
  title: 'Surfaces/AppBar',
};
export default Story;

export const Primary = {
  args: {},
};
