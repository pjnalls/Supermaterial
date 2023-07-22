import type { Meta } from '@storybook/react';
import { Pagination } from './pagination';

const Story: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Navigation/Pagination',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A755&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
