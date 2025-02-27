'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#004d40]">Better</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Buy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Refinance
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              HELOC
            </Link>
            <Link href="/mortgage-calculator" className="text-gray-700 hover:text-gray-900">
              Rates
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Better+
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300">
                <Phone className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                Sign in
              </Link>
              <Button asChild className="bg-[#00a67e] hover:bg-[#008f6c] text-white rounded-full">
                <Link href="/start">Continue</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Buy
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Refinance
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              HELOC
            </Link>
            <Link
              href="/mortgage-calculator"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Rates
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Better+
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Sign in
            </Link>
            <Link
              href="/start"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#00a67e] text-white hover:bg-[#008f6c]"
            >
              Continue
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;