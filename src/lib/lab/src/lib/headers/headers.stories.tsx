import type { Meta } from '@storybook/react';
import { Headers } from './headers';

const Story: Meta<typeof Headers> = {
  component: Headers,
  title: 'Lab/Headers',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A761&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
