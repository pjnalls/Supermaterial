import type { Meta } from '@storybook/react';
import { SpeedDial } from './speed-dial';

const Story: Meta<typeof SpeedDial> = {
  component: SpeedDial,
  title: 'Navigation/Speed Dial',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2269&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
