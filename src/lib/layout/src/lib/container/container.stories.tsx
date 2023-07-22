import type { Meta } from '@storybook/react';
import { Container } from './container';

const Story: Meta<typeof Container> = {
  component: Container,
  title: 'Layout/Container',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2272&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
