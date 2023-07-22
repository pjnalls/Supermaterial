import type { Meta } from '@storybook/react';
import { Box } from './box';

const Story: Meta<typeof Box> = {
  component: Box,
  title: 'Layout/Box',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2271&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
