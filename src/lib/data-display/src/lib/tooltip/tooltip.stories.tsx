import type { Meta } from '@storybook/react';
import { Tooltip } from './tooltip';

const Story: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Data Display/Tooltip',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A768&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
