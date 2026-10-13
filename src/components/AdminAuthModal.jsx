import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Shield, KeyRound, X, Check, Lock } from 'lucide-react';

export const AdminAuthModal = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, loginAdmin } = useApp();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginAdmin(password || 'admin');
    if (!success) {
      setError(true);
    } else {
      setPassword('');
      setError(false);
    }
  };

  const handleInstantUnlock = () => {
    loginAdmin('admin');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={() => setIsAuthModalOpen(false)}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-chassis-950 border border-chassis-800 rounded-lg max-w-md w-full p-6 shadow-2xl space-y-5"
      >
        <div className="flex items-center justify-between border-b border-chassis-800 pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-copper-400" />
            <h3 className="font-serif text-lg text-chassis-100">
              RetroForge Admin CMS Portal
            </h3>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1 rounded text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-chassis-500 font-sans leading-relaxed">
          Log in to edit project descriptions, add new teardowns, update photos, or change bio text directly in the browser.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono text-chassis-400 mb-1 uppercase">
              Admin Access PIN / Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-chassis-600 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="Enter password (default: admin)"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                autoFocus
                className="w-full bg-chassis-900 border border-chassis-700 rounded pl-9 pr-3 py-2 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"
              />
            </div>
            {error && (
              <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                Incorrect PIN. (Tip: Use "admin" or click Quick Unlock below)
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
            <button
              type="submit"
              className="w-full py-2 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Login as Admin</span>
            </button>

            <button
              type="button"
              onClick={handleInstantUnlock}
              className="w-full py-2 bg-chassis-900 hover:bg-chassis-850 border border-chassis-700 text-chassis-300 font-mono text-xs rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Check className="w-3.5 h-3.5 text-copper-400" />
              <span>Quick Unlock</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
