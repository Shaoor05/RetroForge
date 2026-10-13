import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Copy, Check, Heart, Shield } from 'lucide-react';
import { vintageAudio } from '../utils/audio';

export const Footer = () => {
  const { navigateTo, setIsSupportOpen, isAdmin, setIsAuthModalOpen, about } = useApp();
  const [copied, setCopied] = useState(false);
  const upiId = about.upiId || 'shaoor.retroforge@upi';

  const copyUpi = (e) => {
    e.stopPropagation();
    vintageAudio.playRelayClick();
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="mt-24 border-t border-chassis-800 bg-chassis-950/90 text-chassis-500 text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg text-chassis-100">RetroForge</span>
              <span className="text-[10px] font-mono text-copper-400 bg-chassis-900 px-1.5 py-0.5 rounded border border-copper-500/30">
                {about.name || 'Shaoor Ahmad'}
              </span>
            </div>
            <p className="text-xs text-chassis-400 mt-1 max-w-md font-sans">
              Vintage electronics repair & bare-IC maker portfolio. Fourth-year B.Tech EnTC student.
            </p>
          </div>

          {/* Quick UPI Support snippet */}
          <div className="bg-chassis-900 p-3 rounded border border-chassis-800 flex items-center gap-3">
            <button
              onClick={() => setIsSupportOpen(true)}
              className="text-xs font-mono text-chassis-300 hover:text-copper-400 underline cursor-pointer"
            >
              Optional Support / QR
            </button>
            <div className="flex items-center gap-1.5 bg-chassis-950 px-2 py-1 rounded border border-chassis-800 font-mono text-xs text-chassis-200">
              <span>{upiId}</span>
              <button
                onClick={copyUpi}
                className="text-copper-400 hover:text-copper-300 p-0.5 cursor-pointer"
                title="Copy UPI ID"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-chassis-850 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-chassis-600">
          <div className="flex items-center gap-3">
            <span>DOCUMENTATION OVER POLISH</span>
            <span>·</span>
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="text-chassis-500 hover:text-copper-400 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Shield className="w-3 h-3" />
              <span>{isAdmin ? 'Admin Mode (Active)' : 'Admin Login'}</span>
            </button>
          </div>
          <span>© {new Date().getFullYear()} RetroForge</span>
        </div>
      </div>
    </footer>
  );
};
