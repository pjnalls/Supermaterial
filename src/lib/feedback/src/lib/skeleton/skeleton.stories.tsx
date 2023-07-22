import type { Meta } from '@storybook/react';
import { Skeleton } from './skeleton';

const Story: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Feedback/Skeleton',
};
export default Story;

export const Primary = {
  args: {},
};
