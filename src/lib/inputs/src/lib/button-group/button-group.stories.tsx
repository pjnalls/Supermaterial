import type { Meta } from '@storybook/react';
import { ButtonGroup } from './button-group';

const Story: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Inputs/Button Group',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A746&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
