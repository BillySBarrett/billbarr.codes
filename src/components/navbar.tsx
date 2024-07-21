'use client';

import { cn } from '@/lib/utils';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
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
    'hover:text-brand-11 dark:hover:text-darkbrand-11 transition-colors duration-200',
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: Don't make no sense
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <RadixCollapsible.Root open={open} onOpenChange={setOpen}>
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
          <RadixCollapsible.Trigger className="lg:hidden ease-in-out duration-200 transition-transform">
            {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </RadixCollapsible.Trigger>
        )}
      </nav>

      <RadixCollapsible.Content className="px-4 -mt-4 border-b border-gray-300">
        <ul className="flex flex-col">
          {APPLICATION_NAVBAR_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
