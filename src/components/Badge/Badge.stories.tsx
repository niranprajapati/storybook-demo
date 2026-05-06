import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'info'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default', children: 'Badge' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Active' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Pending' },
};

export const Info: Story = {
  args: { variant: 'info', children: 'Most Popular' },
};

export const Playground: Story = {
  args: { variant: 'default', children: 'Badge' },
};
