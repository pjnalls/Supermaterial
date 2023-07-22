import type { Meta } from '@storybook/react';
import { Table } from './table';

const Story: Meta<typeof Table> = {
  component: Table,
  title: 'Data Display/Table',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A762&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
