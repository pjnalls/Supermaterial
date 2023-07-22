import type { Meta } from '@storybook/react';
import { Chip } from './chip';

const Story: Meta<typeof Chip> = {
  component: Chip,
  title: 'Data Display/Chip',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A740&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
