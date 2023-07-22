import type { Meta } from '@storybook/react';
import { Stepper } from './stepper';

const Story: Meta<typeof Stepper> = {
  component: Stepper,
  title: 'Navigation/Stepper',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A760&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
