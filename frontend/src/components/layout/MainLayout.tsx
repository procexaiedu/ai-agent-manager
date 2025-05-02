// src/components/layout/MainLayout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 pl-64"> {/* Adjust pl based on Sidebar width */}
        <Topbar />
        <div className="p-6"> {/* Padding for content area */}
          {children}
        </div>
      </main>
    </div>
  );
}
