import type { Meta } from '@storybook/react';
import { RadioButton } from './radio-button';

const Story: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Inputs/Radio Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2144&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
