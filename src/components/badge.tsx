import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef } from 'react';

export const Badge = ({
  className,
  children,
}: ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
        'text-brand-11 dark:text-darkbrand-11 ring-1 ring-inset ring-brand-8 dark:ring-darkbrand-8',
        'bg-brand-3 dark:bg-darkbrand-4',
        className,
      )}
    >
      {children}
    </span>
  );
};
