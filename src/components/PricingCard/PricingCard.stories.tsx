import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within, expect } from 'storybook/test';
import { PricingCard } from './PricingCard';

// PricingCard imports Badge, PriceTag, and Button directly from their component
// files — not from their story files. The reusable unit is the component itself.
// Stories compose components; stories don't compose other stories.

const meta = {
  title: 'Components/PricingCard',
  component: PricingCard,
  tags: ['autodocs'],
  argTypes: {
    ctaVariant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'destructive'] },
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Starter: Story = {
  args: {
    tier: 'Starter',
    description: 'Everything you need to get up and running.',
    price: { currency: '$', amount: 9, period: '/mo' },
    features: [
      '5 projects',
      '10 GB storage',
      'Basic analytics',
      'Email support',
    ],
    ctaLabel: 'Get started',
    ctaVariant: 'ghost',
    featured: false,
  },
};

export const Pro: Story = {
  args: {
    tier: 'Pro',
    description: 'For growing teams that need more power.',
    price: { currency: '$', amount: 29, period: '/mo' },
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    ctaLabel: 'Get started',
    ctaVariant: 'primary',
    featured: true,
    badgeLabel: 'Most Popular',
  },
};

export const Enterprise: Story = {
  args: {
    tier: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    price: { currency: '$', amount: 99, period: '/mo' },
    features: [
      'Unlimited projects',
      '1 TB storage',
      'Advanced analytics',
      'Dedicated support',
      'Custom integrations',
      'SSO & audit logs',
      'SLA guarantee',
    ],
    ctaLabel: 'Contact sales',
    ctaVariant: 'secondary',
    featured: false,
  },
};

// Playground — toggle `featured` to watch the Badge appear and the accent border activate.
// Swap `ctaVariant` to show child components reacting in real time.
export const Playground: Story = {
  args: {
    tier: 'Pro',
    description: 'For growing teams that need more power.',
    price: { currency: '$', amount: 29, period: '/mo' },
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
    ],
    ctaLabel: 'Get started',
    ctaVariant: 'primary',
    featured: false,
    badgeLabel: 'Most Popular',
  },
};

// Interaction test: clicks the CTA and asserts the selected state appears.
// featured: false so the Selected badge is unambiguous (no other badge present).
export const SelectCard: Story = {
  args: {
    tier: 'Pro',
    description: 'For growing teams that need more power.',
    price: { currency: '$', amount: 29, period: '/mo' },
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    ctaLabel: 'Get started',
    ctaVariant: 'primary',
    featured: false,
    badgeLabel: 'Most Popular',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cta = canvas.getByRole('button', { name: /get started/i });
    await userEvent.click(cta);

    expect(canvas.getByText('Selected')).toBeInTheDocument();
  },
};
