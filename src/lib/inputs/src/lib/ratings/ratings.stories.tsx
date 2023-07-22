import type { Meta } from '@storybook/react';
import { Ratings } from './ratings';

const Story: Meta<typeof Ratings> = {
  component: Ratings,
  title: 'Ratings',
};
export default Story;

export const Primary = {
  args: {},
};
