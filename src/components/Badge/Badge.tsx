import type { ReactNode } from 'react';

export type BadgeProps = {
  variant?: 'default' | 'success' | 'warning' | 'info';
  children: ReactNode;
};

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  info:    'bg-blue-100 text-blue-700',
};

export function Badge({ variant = 'default', children }: BadgeProps): ReactNode {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
