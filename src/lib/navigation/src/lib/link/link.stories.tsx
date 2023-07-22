import type { Meta } from '@storybook/react';
import { Link } from './link';

const Story: Meta<typeof Link> = {
  component: Link,
  title: 'Navigation/Link',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=512%3A2268&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
