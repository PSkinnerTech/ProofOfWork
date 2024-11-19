'use client';

import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/DarkMode';

export function DashboardNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Link1', href: '/dashboard/link1' },
    { name: 'Link2', href: '/dashboard/link2' },
    { name: 'Link3', href: '/dashboard/link3' },
  ];

  return (
    <nav className="flex flex-col h-screen w-64 border-r bg-background">
      {/* App Name */}
      <div className="p-6 border-b">
        <Link href="/" className="text-xl font-bold">
          Proof of Work
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6">
        <ul className="space-y-1 px-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Auth Widget and Theme Toggle - Bottom */}
      <div className="p-6">
          <ModeToggle />
        </div>
      <div className="border-t mt-auto">
        <div className="px-6 pb-6 pt-6">
          <DynamicWidget />
        </div>
      </div>
    </nav>
  );
}