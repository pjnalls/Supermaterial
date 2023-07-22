import type { Meta } from '@storybook/react';
import { TreeView } from './tree-view';

const Story: Meta<typeof TreeView> = {
  component: TreeView,
  title: 'Lab/Tree View',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A769&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
