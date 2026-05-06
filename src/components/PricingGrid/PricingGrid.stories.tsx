import type { Meta, StoryObj } from '@storybook/react-vite';
import { PricingGrid } from './PricingGrid';

const meta = {
  title: 'Components/PricingGrid',
  component: PricingGrid,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-12 bg-gray-50 min-h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PricingGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// ThreeTier is the Chromatic money shot. When PricingCard's padding changes,
// all three cards show diffs in a single screenshot.
export const ThreeTier: Story = {
  args: {
    cards: [
      {
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
      {
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
      {
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
    ],
  },
};
