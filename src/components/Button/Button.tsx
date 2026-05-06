import type { ReactNode } from 'react';
import clsx from 'clsx';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:     'bg-indigo-600 text-white border-transparent hover:bg-indigo-700',
  secondary:   'bg-white text-gray-700 border-gray-300 hover:bg-gray-50',
  ghost:       'bg-transparent text-gray-600 border-transparent hover:bg-gray-100',
  destructive: 'bg-red-600 text-white border-transparent hover:bg-red-700',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
  children,
}: ButtonProps): ReactNode {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {loading ? <Spinner /> : leadingIcon}
      {children}
      {!loading && trailingIcon}
    </button>
  );
}
