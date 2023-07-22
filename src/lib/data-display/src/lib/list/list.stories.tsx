import type { Meta } from '@storybook/react';
import { List } from './list';

const Story: Meta<typeof List> = {
  component: List,
  title: 'Data Display/List',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A751&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
