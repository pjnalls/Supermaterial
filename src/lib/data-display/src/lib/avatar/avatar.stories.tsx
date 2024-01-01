import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

const avatarArgs: AvatarProps = {
  variant: 'circle',
  size: 'sixty-four',
  type: 'image',
  className: '',
};

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Data Display/Avatar',
  argTypes: { variant: { control: false } },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A728&mode=dev',
    },
  },
};
export default meta;

export const Circled_Image: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'image', variant: 'circle' },
};
export const Rounded_Image: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'image', variant: 'rounded' },
};
export const Squared_Image: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'image', variant: 'square' },
};
export const Circled_Icon: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'icon', variant: 'circle' },
};
export const Rounded_Icon: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'icon', variant: 'rounded' },
};
export const Squared_Icon: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'icon', variant: 'square' },
};
export const Circled_Text: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'text', variant: 'circle' },
};
export const Rounded_Text: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'text', variant: 'rounded' },
};
export const Squared_Text: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args} key={JSON.stringify(args)} />,
  args: { ...avatarArgs, type: 'text', variant: 'square' },
};
