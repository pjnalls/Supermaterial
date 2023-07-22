import type { Meta } from '@storybook/react';
import { Images } from './images';

const Story: Meta<typeof Images> = {
  component: Images,
  title: 'Lab/Images',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A749&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
