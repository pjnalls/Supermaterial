import type { Meta } from '@storybook/react';
import { Progress } from './progress';

const Story: Meta<typeof Progress> = {
  component: Progress,
  title: 'Feedback/Progress',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A758&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
