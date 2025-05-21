import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const themes = [
  { name: 'rose', color: '#e11d48' },
  { name: 'sky', color: '#0ea5e9' },
  { name: 'amber', color: '#f59e0b' },
  { name: 'violet', color: '#8b5cf6' },
  { name: 'emerald', color: '#10b981' },
];

export function ThemeSelector() {
  const [theme, setTheme] = useState('default');

  const applyTheme = (themeName: string) => {
    document.documentElement.className = '';
    if (themeName !== 'default') {
      document.documentElement.classList.add(`theme-${themeName}`);
    }
    setTheme(themeName);
    localStorage.setItem('theme', themeName);
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) applyTheme(saved);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="p-1" aria-label="Theme">
          <div
            className="w-4 h-4 rounded-full cursor-pointer outline-none ring-0  focus:outline-none focus-visible:ring-0"
            style={{
              backgroundColor:
                themes.find((t) => t.name === theme)?.color || '#ccc',
            }}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="flex gap-2 px-3 py-2 w-auto bg-white dark:bg-zinc-900 border-none shadow-none"
        sideOffset={8}
      >
        {themes.map((t) => (
          <div
            key={t.name}
            className="w-5 h-5 rounded-full cursor-pointer"
            onClick={() => applyTheme(t.name)}
            style={{ backgroundColor: t.color }}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
