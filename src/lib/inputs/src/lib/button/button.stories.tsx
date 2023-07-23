import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './button';
import './button.module.scss';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Inputs/Button',
  argTypes: { variant: { control: false } },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A735&mode=dev',
    },
  },
};
export default meta;

const buttonArgs: ButtonProps = {
  label: '',
  disabled: false,
  size: 'large',
  hover: false,
  iconLeft: false,
  iconRight: false,
  key: '',
  className: '',
  variant: 'text',
};
export const Text: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} key={JSON.stringify(args)} />,
  args: { ...buttonArgs, label: 'TEXT', variant: 'text' },
};
export const Outlined: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} key={JSON.stringify(args)} />,
  args: { ...buttonArgs, label: 'OUTLINED', variant: 'outlined' },
};
export const Fab_Extended: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} key={JSON.stringify(args)} />,
  args: { ...buttonArgs, label: 'CONTAINED', variant: 'fab-extended' },
};
export const Contained: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} key={JSON.stringify(args)} />,
  args: { ...buttonArgs, label: 'CONTAINED', variant: 'contained' },
};
