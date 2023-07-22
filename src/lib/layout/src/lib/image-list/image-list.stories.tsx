import type { Meta } from '@storybook/react';
import { ImageList } from './image-list';

const Story: Meta<typeof ImageList> = {
  component: ImageList,
  title: 'Layout/ImageList',
};
export default Story;

export const Primary = {
  args: {},
};
