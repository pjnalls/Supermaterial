import type { Meta } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Inputs/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A735&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
