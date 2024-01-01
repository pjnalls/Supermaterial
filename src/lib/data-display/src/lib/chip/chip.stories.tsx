import type { Meta, StoryObj } from '@storybook/react';
import { Chip, ChipProps } from './chip';

const chipArgs: ChipProps = {
  size: 'default',
  variant: 'primary',
  avatar: false,
  close: false,
  className: '',
};

const Story: Meta<typeof Chip> = {
  component: Chip,
  title: 'Data Display/Chip',
  argTypes: { variant: { control: false } },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A740&mode=dev',
    },
  },
};
export default Story;

export const Primary: StoryObj<typeof Chip> = {
  render: (args) => <Chip {...args} key={JSON.stringify(args)} />,
  args: { ...chipArgs, variant: 'primary' },
};
export const Primary_Avatar: StoryObj<typeof Chip> = {
  render: (args) => <Chip {...args} key={JSON.stringify(args)} />,
  args: { ...chipArgs, avatar: true, variant: 'primary' },
};
