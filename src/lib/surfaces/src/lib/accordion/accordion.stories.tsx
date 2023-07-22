import type { Meta } from '@storybook/react';
import { Accordion } from './accordion';

const Story: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Surfaces/Accordion',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A742&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
