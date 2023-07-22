import type { Meta } from '@storybook/react';
import { Masonry } from './masonry';

const Story: Meta<typeof Masonry> = {
  component: Masonry,
  title: 'Lab/Masonry',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2403&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
