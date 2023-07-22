import type { Meta } from '@storybook/react';
import { BottomSheets } from './bottom-sheets';

const Story: Meta<typeof BottomSheets> = {
  component: BottomSheets,
  title: 'Lab/Bottom Sheets',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A733&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
