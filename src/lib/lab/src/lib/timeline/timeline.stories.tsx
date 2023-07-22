import type { Meta } from '@storybook/react';
import { Timeline } from './timeline';

const Story: Meta<typeof Timeline> = {
  component: Timeline,
  title: 'Lab/Timeline',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A767&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
