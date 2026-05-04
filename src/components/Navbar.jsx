import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Network } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white hover:text-cyan-400 transition-colors">CORELOGIC</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link to="/" className={`transition-colors text-sm font-medium ${isHome ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>Home</Link>
              {isHome ? (
                <>
                  <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Services</a>
                  <a href="#dashboard" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500 node-pulse"></span>
                    Node Status
                  </a>
                  <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Pricing</a>
                </>
              ) : null}
              <Link to="/portfolio" className={`transition-colors text-sm font-medium ${location.pathname === '/portfolio' ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-400'}`}>
                Neural Vault (Portfolio)
              </Link>
            </div>
          </div>
          
          <div>
            <a href={isHome ? "#contact" : "/#contact"} className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
