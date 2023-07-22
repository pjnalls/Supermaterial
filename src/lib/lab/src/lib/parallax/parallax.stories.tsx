import type { Meta } from '@storybook/react';
import { Parallax } from './parallax';

const Story: Meta<typeof Parallax> = {
  component: Parallax,
  title: 'Lab/Parallax',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A756&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
