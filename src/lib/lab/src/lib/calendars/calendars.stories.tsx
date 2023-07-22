import type { Meta } from '@storybook/react';
import { Calendars } from './calendars';

const Story: Meta<typeof Calendars> = {
  component: Calendars,
  title: 'Lab/Calendars',
};
export default Story;

export const Primary = {
  args: {},
};
