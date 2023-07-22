import type { Meta } from '@storybook/react';
import { Breadcrumbs } from './breadcrumbs';

const Story: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Navigation/Breadcrumbs',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A734&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
