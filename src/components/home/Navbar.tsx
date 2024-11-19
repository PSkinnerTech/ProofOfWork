'use client';

import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ModeToggle } from '@/components/DarkMode';

export function Navbar() {
  const { user } = useDynamicContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Proof of Work
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-600">
            Projects
          </Link>
        </div>

        {/* Auth Button */}
        <div className="flex items-center space-x-2">
          <div className="pr-4">
          <ModeToggle />
          </div>
          <DynamicWidget />
        </div>
      </div>
    </nav>
  );
}