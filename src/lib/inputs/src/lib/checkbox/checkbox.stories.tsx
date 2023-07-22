import type { Meta } from '@storybook/react';
import { Checkbox } from './checkbox';

const Story: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Inputs/Checkbox',
};
export default Story;

export const Primary = {
  args: {},
};
