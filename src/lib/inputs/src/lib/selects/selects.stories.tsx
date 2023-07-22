import type { Meta } from '@storybook/react';
import { Selects } from './selects';

const Story: Meta<typeof Selects> = {
  component: Selects,
  title: 'Inputs/Selects',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=69%3A1014&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
