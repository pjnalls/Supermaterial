import type { Meta } from '@storybook/react';
import { Snackbar } from './snackbar';

const Story: Meta<typeof Snackbar> = {
  component: Snackbar,
  title: 'Feedback/Snackbar',
};
export default Story;

export const Primary = {
  args: {},
};
