import type { Meta } from '@storybook/react';
import { ToggleButtons } from './toggle-buttons';

const Story: Meta<typeof ToggleButtons> = {
  component: ToggleButtons,
  title: 'Inputs/Toggle Buttons',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2261&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
