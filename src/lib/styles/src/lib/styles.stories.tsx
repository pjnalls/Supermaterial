import type { Meta } from '@storybook/react';
import { Styles } from './styles';

const Story: Meta<typeof Styles> = {
  component: Styles,
  title: 'Styles',
};
export default Story;

export const Primary = {
  args: {},
};
