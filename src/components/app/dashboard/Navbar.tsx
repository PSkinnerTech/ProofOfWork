'use client';

import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/DarkMode';
import { useState } from 'react';

type Section = 'profile' | 'proof-of-self' | 'proof-of-work';

interface DashboardNavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export function DashboardNavbar({ activeSection, setActiveSection }: DashboardNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Profile', value: 'profile' as const },
    { name: 'Proof of Self', value: 'proof-of-self' as const },
    { name: 'Proof of Work', value: 'proof-of-work' as const },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background z-50 flex items-center px-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-accent rounded-md"
        >
          <Menu size={24} />
        </button>
        <span className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">
          Proof of Work
        </span>
      </nav>

      {/* Sidebar - Desktop & Mobile */}
      <nav className={cn(
        "fixed md:sticky md:top-0 h-[100dvh] w-64 border-r bg-background transition-transform duration-300 z-40",
        "md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        "flex flex-col",
        "pt-16 md:pt-0"
      )}>
        <div className="p-6 border-b hidden md:block">
          <span className="text-xl font-bold">
            Proof of Work
          </span>
        </div>

        <div className="flex-1">
          <ul className="space-y-1 px-3">
            {navLinks.map((link) => (
              <li key={link.value}>
                <button
                  onClick={() => {
                    setActiveSection(link.value);
                    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    activeSection === link.value ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pb-safe">
          <div className="p-6">
            <ModeToggle />
          </div>
          <div className="border-t">
            <div className="px-6 pt-6 pb-24 md:py-6">
              <DynamicWidget />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay with increased opacity */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}