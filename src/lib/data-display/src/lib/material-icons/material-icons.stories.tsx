import type { Meta } from '@storybook/react';
import { MaterialIcons } from './material-icons';

const Story: Meta<typeof MaterialIcons> = {
  component: MaterialIcons,
  title: 'Data Display/Material Icons',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A748&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
