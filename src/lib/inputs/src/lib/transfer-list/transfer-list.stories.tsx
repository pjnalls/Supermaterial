import type { Meta } from '@storybook/react';
import { TransferList } from './transfer-list';

const Story: Meta<typeof TransferList> = {
  component: TransferList,
  title: 'Inputs/TransferList',
};
export default Story;

export const Primary = {
  args: {},
};
