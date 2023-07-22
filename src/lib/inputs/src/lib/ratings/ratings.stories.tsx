import type { Meta } from '@storybook/react';
import { Ratings } from './ratings';

const Story: Meta<typeof Ratings> = {
  component: Ratings,
  title: 'Inputs/Ratings',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A759&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
