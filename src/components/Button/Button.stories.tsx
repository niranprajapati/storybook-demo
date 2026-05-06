import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'destructive'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Button' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Button' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Button' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete account' },
};

export const Loading: Story = {
  args: { variant: 'primary', loading: true, children: 'Saving…' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Button' },
};

export const WithLeadingIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Download',
    leadingIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const WithTrailingIcon: Story = {
  args: {
    variant: 'secondary',
    children: 'Next',
    trailingIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Button' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'Button' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Button' },
};

// Playground is the story the presenter scrubs live with controls.
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click me',
    loading: false,
    disabled: false,
  },
};
