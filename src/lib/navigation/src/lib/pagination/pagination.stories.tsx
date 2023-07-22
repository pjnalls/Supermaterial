import type { Meta } from '@storybook/react';
import { Pagination } from './pagination';

const Story: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Navigation/Pagination',
};
export default Story;

export const Primary = {
  args: {},
};
