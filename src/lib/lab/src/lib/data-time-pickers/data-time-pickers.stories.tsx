import type { Meta } from '@storybook/react';
import { DataTimePickers } from './data-time-pickers';

const Story: Meta<typeof DataTimePickers> = {
  component: DataTimePickers,
  title: 'Lab/Data Time Pickers',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A757&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
