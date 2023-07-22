import type { Meta } from '@storybook/react';
import { Carousels } from './carousels';

const Story: Meta<typeof Carousels> = {
  component: Carousels,
  title: 'Lab/Carousels',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A739&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
