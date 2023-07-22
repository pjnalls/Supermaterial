import type { Meta } from '@storybook/react';
import { Divider } from './divider';

const Story: Meta<typeof Divider> = {
  component: Divider,
  title: 'Data Display/Divider',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A726&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
