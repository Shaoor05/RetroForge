import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUpRight, Edit3 } from 'lucide-react';

export const BenchCard = ({ item, index = 0 }) => {
  const { openRepairModal, isAdmin, openEditor } = useApp();
  const numFormatted = (index + 1).toString().padStart(2, '0');

  const handleEdit = (e) => {
    e.stopPropagation();
    openEditor('repair', item.id, item);
  };

  return (
    <article
      onClick={() => openRepairModal(item.id)}
      className="group bg-chassis-900/60 hover:bg-chassis-900 border border-chassis-800/80 hover:border-chassis-700 rounded-lg p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-sm relative"
    >
      <div className="space-y-3">
        {/* Top meta row */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-copper-400 font-semibold">
            {item.category} · {item.year}
          </span>
          
          <div className="flex items-center gap-2">
            <span className="text-chassis-500 font-mono text-[11px]">
              SPECIMEN #{numFormatted}
            </span>
            {isAdmin && (
              <button
                type="button"
                onClick={handleEdit}
                className="px-2 py-0.5 rounded bg-copper-500/20 border border-copper-500/40 text-copper-400 hover:bg-copper-500 hover:text-chassis-950 text-[10px] font-mono flex items-center gap-1 transition-colors"
                title="Edit this project"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            )}
          </div>
        </div>

        {/* Photo with subtle border */}
        <div className="relative aspect-[16/10] rounded overflow-hidden bg-chassis-950 border border-chassis-800">
          <img
            src={item.heroImage}
            alt={item.name}
            className="w-full h-full object-cover grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chassis-950/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-2 right-2 text-[10px] font-mono bg-chassis-950/90 text-chassis-300 px-2 py-0.5 rounded border border-chassis-700/80 flex items-center gap-1">
            <span>Open log</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-serif text-xl text-chassis-100 group-hover:text-copper-400 transition-colors leading-snug">
            {item.name}
          </h3>
          <p className="text-xs text-chassis-400 mt-2 font-sans line-clamp-3 leading-relaxed">
            {item.summary || item.description || item.symptom}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-3 border-t border-chassis-800/80 text-xs font-mono text-copper-400/90 flex items-center justify-between">
        <span className="truncate pr-2">Read complete teardown & schematic notes</span>
        <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0 text-chassis-500 group-hover:text-copper-400 transition-colors" />
      </div>
    </article>
  );
};
