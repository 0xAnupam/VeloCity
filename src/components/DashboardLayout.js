'use client';

import Navbar from './Navbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 px-4">
        {children}
      </div>
    </div>
  );
}