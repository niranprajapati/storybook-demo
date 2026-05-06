import { useState } from 'react';
import clsx from 'clsx';
import { Badge } from '../Badge/Badge';
import { Button, type ButtonProps } from '../Button/Button';
import { PriceTag } from '../PriceTag/PriceTag';

export type PricingCardProps = {
  tier: string;
  description: string;
  price: { currency: string; amount: number; period: string };
  features: string[];
  ctaLabel: string;
  ctaVariant?: ButtonProps['variant'];
  featured?: boolean;
  badgeLabel?: string;
};

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-indigo-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export function PricingCard({
  tier,
  description,
  price,
  features,
  ctaLabel,
  ctaVariant = 'primary',
  featured = false,
  badgeLabel = 'Most Popular',
}: PricingCardProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={clsx(
        'flex flex-col rounded-2xl bg-white shadow-sm w-full max-w-xs border',
        'p-6', // Chromatic regression target — presenter changes this to p-8 during the live demo
        selected
          ? 'border-2 border-emerald-500'
          : featured
            ? 'border-2 border-indigo-500'
            : 'border-gray-200',
      )}
    >
      {selected && (
        <div className="mb-2">
          <Badge variant="success">Selected</Badge>
        </div>
      )}

      {featured && (
        <div className="mb-4">
          <Badge variant="info">{badgeLabel}</Badge>
        </div>
      )}

      <h3 className="text-lg font-semibold text-gray-900">{tier}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>

      <div className="mt-4">
        <PriceTag currency={price.currency} amount={price.amount} period={price.period} />
      </div>

      <ul className="mt-6 space-y-2 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          variant={ctaVariant}
          size="md"
          className="w-full justify-center"
          onClick={() => setSelected(true)}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
