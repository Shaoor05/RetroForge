import React from 'react';
import { buildsData } from '../data/buildsData';
import { Cpu, Terminal, Zap } from 'lucide-react';

export const BuildDetailView = () => {
  const project = buildsData[0];

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-3">
        <span className="text-xs font-mono uppercase text-bakelite-400 block">
          BUILDS — "Things I'm making from scratch."
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-chassis-100">
          {project.title} — {project.status}
        </h1>
        <p className="text-sm text-chassis-300 leading-relaxed font-sans">
          {project.subtitle}
        </p>
      </div>

      {/* Build Logs Entries */}
      <div className="space-y-6">
        {project.buildLogs.map((log) => (
          <article
            key={log.entryNumber}
            className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 space-y-3 shadow-chassis-raised"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-bakelite-400 border-b border-chassis-800 pb-2 font-bold">
              <Terminal className="w-4 h-4" />
              <span>Entry {log.entryNumber} — {log.title}</span>
            </div>
            <p className="text-sm text-chassis-200 font-sans leading-relaxed">
              {log.content}
            </p>
          </article>
        ))}

        <div className="p-4 rounded bg-chassis-950 border border-chassis-800 text-xs font-mono text-chassis-500 italic text-center">
          {project.futureNote}
        </div>
      </div>
    </div>
  );
};
