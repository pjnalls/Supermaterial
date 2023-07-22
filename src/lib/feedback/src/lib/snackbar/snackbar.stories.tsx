import type { Meta } from '@storybook/react';
import { Snackbar } from './snackbar';

const Story: Meta<typeof Snackbar> = {
  component: Snackbar,
  title: 'Snackbar',
};
export default Story;

export const Primary = {
  args: {},
};
