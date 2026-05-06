export type PriceTagProps = {
  currency: string;
  amount: number;
  period?: string;
  size?: 'sm' | 'md' | 'lg';
};

const amountSizeClasses: Record<NonNullable<PriceTagProps['size']>, string> = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
};

const currencySizeClasses: Record<NonNullable<PriceTagProps['size']>, string> = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
};

export function PriceTag({ currency, amount, period, size = 'md' }: PriceTagProps) {
  return (
    <div className="flex items-baseline gap-0.5">
      <span className={`${currencySizeClasses[size]} font-medium self-start mt-1 text-gray-900`}>
        {currency}
      </span>
      <span className={`${amountSizeClasses[size]} font-bold tracking-tight text-gray-900`}>
        {amount}
      </span>
      {period && (
        <span className="text-sm text-gray-500 ml-1">{period}</span>
      )}
    </div>
  );
}
