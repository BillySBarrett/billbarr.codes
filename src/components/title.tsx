import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

export type TitleProps = {
  className?: string;
} & PropsWithChildren &
  ComponentPropsWithoutRef<'h1'>;

export const Title: FC<TitleProps> = ({ className, children, ...props }) => {
  const classes = cn(
    'scroll-m-20 font-fraunces text-4xl font-extrabold tracking-tight lg:text-5xl py-4',
    className,
  );
  return (
    <h1 {...props} className={classes}>
      {children}
    </h1>
  );
};
