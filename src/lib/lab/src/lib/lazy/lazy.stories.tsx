import type { Meta } from '@storybook/react';
import { Lazy } from './lazy';

const Story: Meta<typeof Lazy> = {
  component: Lazy,
  title: 'Lab/Lazy',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A750&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
