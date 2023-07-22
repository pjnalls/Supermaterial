import type { Meta } from '@storybook/react';
import { Footers } from './footers';

const Story: Meta<typeof Footers> = {
  component: Footers,
  title: 'Lab/Footers',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A743&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
