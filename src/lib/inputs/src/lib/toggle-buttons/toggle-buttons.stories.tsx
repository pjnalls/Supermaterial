import type { Meta } from '@storybook/react';
import { ToggleButtons } from './toggle-buttons';

const Story: Meta<typeof ToggleButtons> = {
  component: ToggleButtons,
  title: 'Inputs/ToggleButtons',
};
export default Story;

export const Primary = {
  args: {},
};
