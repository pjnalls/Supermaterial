import type { Meta } from '@storybook/react';
import { TextField } from './text-field';

const Story: Meta<typeof TextField> = {
  component: TextField,
  title: 'Inputs/Text Field',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A744&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
