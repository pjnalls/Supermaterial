import type { Meta } from '@storybook/react';
import { Tabs } from './tabs';

const Story: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Navigation/Tabs',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A766&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
