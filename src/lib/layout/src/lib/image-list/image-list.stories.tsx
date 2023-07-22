import type { Meta } from '@storybook/react';
import { ImageList } from './image-list';

const Story: Meta<typeof ImageList> = {
  component: ImageList,
  title: 'Layout/Image List',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2274&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
