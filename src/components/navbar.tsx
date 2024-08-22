'use client';

import { cn } from '@/lib/utils';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC, useEffect, useState } from 'react';

type NavigationLink = {
  label: string;
  href: string;
};

const APPLICATION_NAVBAR_ITEMS: NavigationLink[] = [
  {
    label: 'Experiences',
    href: '/experiences',
  },
];

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const link = cn(
    'text-lg lg:text-xl font-outfit',
    'hover:text-brand-11 dark:hover:text-brandDark-11 transition-colors duration-200',
  );

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setOpen(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Don't make no sense
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Also don't make no sense
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <Collapsible.Root
      className={cn(
        'relative',
        'data-[state=open]:fixed data-[state=open]:inset-0 data-[state=open]:h-screen data-[state=open]:bg-brand-1 dark:data-[state=open]:bg-brandDark-1',
        'data-[state=open]:text-gs-12 dark:data-[state=open]:text-gsDark-12',
        'data-[state=open]:border-none data-[state=open]:shadow-lg data-[state=open]:z-50',
      )}
      open={open}
      onOpenChange={setOpen}
    >
      <nav className="w-full mx-auto max-w-screen-lg p-4 lg:p-8 flex justify-between">
        <Link href="/" className={cn(link, 'text-xl')}>
          Billy Steen Barrett
        </Link>
        <ul className="hidden lg:flex gap-4">
          {APPLICATION_NAVBAR_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {APPLICATION_NAVBAR_ITEMS.length !== 0 && (
          <Collapsible.Trigger className="lg:hidden ease-in-out duration-200 transition-transform">
            {open ? (
              <Cross1Icon className="w-6 h-6" />
            ) : (
              <HamburgerMenuIcon className="w-6 h-6" />
            )}
          </Collapsible.Trigger>
        )}
      </nav>

      <Collapsible.Content className="px-4 mt-4 lg:hidden flex flex-col items-start space-y-4">
        <ul className="flex flex-col w-full">
          {APPLICATION_NAVBAR_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
