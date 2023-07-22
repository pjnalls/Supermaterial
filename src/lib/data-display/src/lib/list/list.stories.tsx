import type { Meta } from '@storybook/react';
import { List } from './list';

const Story: Meta<typeof List> = {
  component: List,
  title: 'Data Display/List',
};
export default Story;

export const Primary = {
  args: {},
};
