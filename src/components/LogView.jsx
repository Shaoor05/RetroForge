import React from 'react';
import { logData } from '../data/logData';
import { BookOpen } from 'lucide-react';

export const LogView = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-3">
        <span className="text-xs font-mono uppercase text-copper-400 block">
          LOG — "Where the mistakes live."
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-chassis-100">
          Raw Bench Logbook
        </h1>
      </div>

      {/* Log Posts */}
      <div className="space-y-6">
        {logData.map((post) => (
          <article
            key={post.id}
            className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 space-y-4 shadow-chassis-raised"
          >
            <div className="flex items-center justify-between font-mono text-xs text-copper-400 border-b border-chassis-800 pb-3 font-semibold">
              <span>{post.title}</span>
              <span className="text-chassis-600">{post.readingTime}</span>
            </div>

            <p className="text-sm text-chassis-200 font-sans leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
