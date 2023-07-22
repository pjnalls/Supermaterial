import type { Meta } from '@storybook/react';
import { Calendars } from './calendars';

const Story: Meta<typeof Calendars> = {
  component: Calendars,
  title: 'Lab/Calendars',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A737&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
