import type { Meta, StoryObj } from '@storybook/react-vite';
import { PriceTag } from './PriceTag';

const meta = {
  title: 'Components/PriceTag',
  component: PriceTag,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof PriceTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { currency: '$', amount: 29, period: '/mo', size: 'md' },
};

export const Small: Story = {
  args: { currency: '$', amount: 29, period: '/mo', size: 'sm' },
};

export const Large: Story = {
  args: { currency: '$', amount: 29, period: '/mo', size: 'lg' },
};

// Playground — scrub `size` live to show how it scales the amount.
export const Playground: Story = {
  args: { currency: '$', amount: 29, period: '/mo', size: 'md' },
};
