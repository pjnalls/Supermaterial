import type { Meta } from '@storybook/react';
import { Avatar } from './avatar';

const Story: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default Story;

export const Primary = {
  args: {},
};
