import type { Meta } from '@storybook/react';
import { TransferList } from './transfer-list';

const Story: Meta<typeof TransferList> = {
  component: TransferList,
  title: 'Inputs/Transfer List',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2254&mode=dev0',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
