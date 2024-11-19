'use client';

import { useState } from 'react';
import { BadgeCheck } from 'lucide-react';
import { ProofOfSelf } from '@/components/app/dashboard/ProofOfSelf';
import ProofOfWork from '@/components/app/dashboard/ProofOfWork';
import { DashboardNavbar } from '@/components/app/dashboard/Navbar';

type Section = 'profile' | 'proof-of-self' | 'proof-of-work';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<Section>('profile');

  const renderContent = () => {
    switch (activeSection) {
      case 'proof-of-self':
        return <ProofOfSelf />;
      case 'proof-of-work':
        return <ProofOfWork />;
      default:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src="https://placeholder.co/400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2">
                <h1 className="text-4xl font-bold">Patrick Skinner</h1>
                <BadgeCheck className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen md:pt-0 pt-16">
      <DashboardNavbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="flex-1 p-8 w-full">
        {renderContent()}
      </main>
    </div>
  );
}