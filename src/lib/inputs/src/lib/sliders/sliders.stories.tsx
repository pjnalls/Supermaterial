import type { Meta } from '@storybook/react';
import { Sliders } from './sliders';

const Story: Meta<typeof Sliders> = {
  component: Sliders,
  title: 'Inputs/Sliders',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=145%3A2082&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
