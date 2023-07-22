import type { Meta } from '@storybook/react';
import { Paper } from './paper';

const Story: Meta<typeof Paper> = {
  component: Paper,
  title: 'Surfaces/Paper',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2266&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
