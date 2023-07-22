import type { Meta } from '@storybook/react';
import { Avatar } from './avatar';

const Story: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Data Display/Avatar',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A728&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
