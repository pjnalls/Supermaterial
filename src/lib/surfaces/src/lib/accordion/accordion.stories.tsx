import type { Meta } from '@storybook/react';
import { Accordion } from './accordion';

const Story: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Surfaces/Accordion',
};
export default Story;

export const Primary = {
  args: {},
};
