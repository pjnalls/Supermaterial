import type { Meta } from '@storybook/react';
import { Link } from './link';

const Story: Meta<typeof Link> = {
  component: Link,
  title: 'Navigation/Link',
};
export default Story;

export const Primary = {
  args: {},
};
