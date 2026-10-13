import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Plus, Edit, RotateCcw, LogOut, Check } from 'lucide-react';

export const AdminBar = () => {
  const { isAdmin, logoutAdmin, openEditor, resetToDefaults } = useApp();

  if (!isAdmin) return null;

  return (
    <div className="sticky top-16 z-30 bg-copper-500/15 border-b border-copper-500/40 backdrop-blur-md px-4 py-2 font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-copper-400 font-bold">
          <Shield className="w-4 h-4 text-copper-400" />
          <span>ADMIN CMS ACTIVE // LIVE EDITING UNLOCKED</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => openEditor('repair', null)}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-bold transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add New Bench Teardown</span>
          </button>

          <button
            onClick={() => openEditor('about', null)}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-chassis-900 border border-chassis-700 hover:border-copper-500/60 text-chassis-200 hover:text-copper-400 transition-colors cursor-pointer"
          >
            <Edit className="w-3.5 h-3.5" />
            <span>Edit Bio & Workshop</span>
          </button>

          <button
            onClick={resetToDefaults}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-chassis-900 border border-chassis-700 hover:border-rose-500/50 text-chassis-400 hover:text-rose-400 transition-colors cursor-pointer"
            title="Reset all content to original defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Stock Data</span>
          </button>

          <button
            onClick={logoutAdmin}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-chassis-950 border border-chassis-700 hover:bg-chassis-900 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Exit Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
};
