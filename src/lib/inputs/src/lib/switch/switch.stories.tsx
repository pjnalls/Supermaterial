import type { Meta } from '@storybook/react';
import { Switch } from './switch';

const Story: Meta<typeof Switch> = {
  component: Switch,
  title: 'Inputs/Switch',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2199&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
