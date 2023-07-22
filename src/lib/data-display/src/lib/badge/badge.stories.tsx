import type { Meta } from '@storybook/react';
import { Badge } from './badge';

const Story: Meta<typeof Badge> = {
  component: Badge,
  title: 'Data Display/Badge',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A729&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
