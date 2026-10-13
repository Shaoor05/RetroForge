import React from 'react';
import { useApp } from '../context/AppContext';
import { Volume2, VolumeX, HeartHandshake, Shield, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const { activeTab, navigateTo, isMuted, toggleSound, setIsSupportOpen, isAdmin, setIsAuthModalOpen, logoutAdmin, about } = useApp();

  const navLinks = [
    { id: 'home', num: '00', label: 'Index' },
    { id: 'bench', num: '01', label: 'The Bench' },
    { id: 'builds', num: '02', label: 'Builds' },
    { id: 'log', num: '03', label: 'Log' },
    { id: 'junk', num: '04', label: 'Send Junk' },
    { id: 'about', num: '05', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-chassis-950/85 backdrop-blur-md border-b border-chassis-800/60">
      {/* Top micro bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Name */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded bg-chassis-900 border border-chassis-700 flex items-center justify-center font-mono text-copper-400 text-xs font-bold group-hover:border-copper-500/60 transition-colors">
              RF
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg text-chassis-100 group-hover:text-copper-400 transition-colors">
                  RetroForge
                </span>
                <span className="text-[10px] font-mono text-chassis-500 border border-chassis-800 px-1.5 py-0.5 rounded">
                  {about.name || 'Shaoor Ahmad'}
                </span>
              </div>
              <span className="text-[11px] font-mono text-chassis-500 block -mt-0.5">
                Electronics & Telecommunication // 2026
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-copper-400 font-semibold'
                      : 'text-chassis-500 hover:text-chassis-200'
                  }`}
                >
                  <span className="text-[10px] text-chassis-600">{item.num}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Utilities: Sound FX, Admin & Support */}
          <div className="flex items-center gap-2.5">
            {/* Admin CMS Button */}
            <button
              onClick={() => isAdmin ? logoutAdmin() : setIsAuthModalOpen(true)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border transition-all cursor-pointer ${
                isAdmin
                  ? 'bg-copper-500/20 text-copper-400 border-copper-500/60 shadow-amber-glow font-bold'
                  : 'bg-chassis-900/50 text-chassis-500 hover:text-copper-400 border-chassis-800 hover:border-chassis-700'
              }`}
              title={isAdmin ? 'Admin Mode Active (Click to Logout)' : 'Login as Admin to Edit Content'}
            >
              {isAdmin ? <ShieldCheck className="w-3.5 h-3.5 text-copper-400" /> : <Shield className="w-3.5 h-3.5" />}
              <span className="text-[11px] hidden sm:inline">{isAdmin ? 'Admin: ON' : 'Admin'}</span>
            </button>

            <button
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-chassis-500 hover:text-copper-400 border border-chassis-800 hover:border-chassis-700 bg-chassis-900/50 transition-colors cursor-pointer"
              title={isMuted ? 'Audio feedback muted' : 'Tactile audio feedback on'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-chassis-600" /> : <Volume2 className="w-3.5 h-3.5 text-copper-400" />}
              <span className="text-[11px] hidden sm:inline">{isMuted ? 'Muted' : 'Sound'}</span>
            </button>

            <button
              onClick={() => setIsSupportOpen(true)}
              className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-chassis-300 hover:text-copper-400 border border-chassis-800 bg-chassis-900/50 hover:border-copper-500/40 transition-colors cursor-pointer"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-copper-400" />
              <span>Support</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-chassis-850 gap-1 overflow-x-auto scrollbar-none font-mono text-xs">
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`flex-shrink-0 px-2 py-1 rounded flex items-center gap-1 ${
                  isActive ? 'text-copper-400 bg-chassis-900 font-bold' : 'text-chassis-500'
                }`}
              >
                <span className="text-[10px] text-chassis-600">{item.num}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
