import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from './badge';

const badgeArgs: BadgeProps = {
  tile: false,
  dot: false,
  bordered: false,
  variant: 'text',
  className: '',
};

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Data Display/Badge',
  argTypes: { variant: { control: false } },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A729&mode=dev',
    },
  },
};
export default meta;

export const Text: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args} key={JSON.stringify(args)} />,
  args: { ...badgeArgs, variant: 'text' },
}
export const Icon: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args} key={JSON.stringify(args)} />,
  args: { ...badgeArgs, variant: 'icon' },
};
export const None: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args} key={JSON.stringify(args)} />,
  args: { ...badgeArgs, dot: true, variant: 'none' },
};
