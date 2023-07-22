import type { Meta } from '@storybook/react';
import { Alerts } from './alerts';

const Story: Meta<typeof Alerts> = {
  component: Alerts,
  title: 'Feedback/Alerts',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A2&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
