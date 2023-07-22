import type { Meta } from '@storybook/react';
import { Checkbox } from './checkbox';

const Story: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Inputs/Checkbox',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=69%3A132&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
