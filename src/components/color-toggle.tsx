'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MagicWandIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';

export const COLOR_CONFIG = [
  { label: 'Violet', color: 'violet' },
  { label: 'Grass', color: 'grass' },
  { label: 'Ruby', color: 'ruby' },
  { label: 'Jade', color: 'jade' },
  { label: 'Amber', color: 'amber' },
  { label: 'Sky', color: 'sky' },
  { label: 'Tomato', color: 'tomato' },
  { label: 'Bronze', color: 'bronze' },
];

const ColorToggle = () => {
  const [theme, setTheme] = useState('violet');

  useEffect(() => {
    const savedTheme = localStorage.getItem('color');
    if (!savedTheme) {
      return;
    }
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme);
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    if (theme === newTheme) {
      return;
    }
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('color', newTheme);
    setTheme(newTheme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MagicWandIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />{' '}
          {/* Use the paintbrush icon */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {COLOR_CONFIG.map((color) => (
          <DropdownMenuItem
            key={color.color}
            onClick={() => toggleTheme(color.color)}
          >
            {color.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColorToggle;
