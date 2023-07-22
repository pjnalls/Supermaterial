import type { Meta } from '@storybook/react';
import { Components } from './components';

const Story: Meta<typeof Components> = {
  component: Components,
  title: 'Data Grid/Components',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nbO14q0NxfCt2XNGB0y7v7/prmp.logo?type=design&node-id=2-38&mode=design&t=MsAul0NrR2amRx0N-0',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
