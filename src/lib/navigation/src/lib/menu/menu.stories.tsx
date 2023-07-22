import type { Meta } from '@storybook/react';
import { Menu } from './menu';

const Story: Meta<typeof Menu> = {
  component: Menu,
  title: 'Navigation/Menu',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A752&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
