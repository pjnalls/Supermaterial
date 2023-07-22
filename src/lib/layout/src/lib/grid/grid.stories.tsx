import type { Meta } from '@storybook/react';
import { Grid } from './grid';

const Story: Meta<typeof Grid> = {
  component: Grid,
  title: 'Layout/Grid',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A745&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
