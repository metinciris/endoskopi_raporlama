import React, { ReactNode } from 'react';
import { Microscope } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  onReset: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onReset }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Microscope className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-semibold text-gray-900">Patoloji Endoskopi Rapor Oluşturucu</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-2 py-6 sm:px-4 lg:px-6">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Patoloji Rapor Sistemi
        </div>
      </footer>
    </div>
  );
};