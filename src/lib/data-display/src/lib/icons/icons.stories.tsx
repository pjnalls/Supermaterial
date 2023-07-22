import type { Meta } from '@storybook/react';
import { Icons } from './icons';

const Story: Meta<typeof Icons> = {
  component: Icons,
  title: 'Data Display/Icons',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2263&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
