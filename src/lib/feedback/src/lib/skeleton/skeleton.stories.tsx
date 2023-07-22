import type { Meta } from '@storybook/react';
import { Skeleton } from './skeleton';

const Story: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Feedback/Skeleton',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=138%3A0&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
