import React from 'react';
import { Network } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-[#01030e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Network className="w-5 h-5 text-indigo-400" />
          <span className="font-bold text-lg tracking-tight text-white">CORELOGIC</span>
        </div>
        <p className="text-gray-500 text-sm">© 2026 CoreLogic AI Systems. The Software Warehouse. All rights reserved.</p>
      </div>
    </footer>
  );
}
