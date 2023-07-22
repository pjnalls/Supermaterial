import type { Meta } from '@storybook/react';
import { Card } from './card';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Surfaces/Card',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A738&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
