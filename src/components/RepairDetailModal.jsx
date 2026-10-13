import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Heart, MessageSquare, Send, BookOpen, Layers, Edit3, Camera } from 'lucide-react';

export const RepairDetailModal = () => {
  const { selectedRepairId, closeRepairModal, likes, toggleLike, comments, addComment, repairs, isAdmin, openEditor } = useApp();
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  if (!selectedRepairId) return null;

  const item = repairs.find((r) => r.id === selectedRepairId);
  if (!item) return null;

  const itemLikes = likes[item.id] || { count: item.initialLikes || 20, userLiked: false };
  const itemComments = comments[item.id] || [];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(item.id, commentName, commentText);
    setCommentText('');
  };

  const handleOpenEdit = () => {
    openEditor('repair', item.id, item);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={closeRepairModal}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-chassis-950 border border-chassis-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-chassis-500"
      >
        {/* Top Specimen Header Bar */}
        <div className="sticky top-0 z-20 bg-chassis-900 border-b border-chassis-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-copper-500"></div>
            <div>
              <span className="text-[11px] font-mono uppercase text-copper-400">
                BENCH TEARDOWN LOG // SPECIMEN #{item.id.toUpperCase()}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-chassis-100">
                {item.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <button
                type="button"
                onClick={handleOpenEdit}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-copper-500/20 border border-copper-500/50 text-copper-400 hover:bg-copper-500 hover:text-chassis-950 text-xs font-mono font-bold transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Content</span>
              </button>
            )}
            <button
              onClick={closeRepairModal}
              className="p-1.5 rounded-md hover:bg-chassis-800 text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer"
              aria-label="Close repair detail"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Image & Quick Specs Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7 rounded overflow-hidden border border-chassis-800 bg-chassis-900">
              <img
                src={item.heroImage}
                alt={item.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-3 bg-chassis-900/90 border-t border-chassis-800 text-xs font-mono text-chassis-500 flex justify-between">
                <span>YEAR: CIRCA {item.year}</span>
                <span>CATEGORY: {item.category}</span>
                <span>DECADE: {item.decade}</span>
              </div>
            </div>

            {/* Spec Sheet Column */}
            <div className="md:col-span-5 bg-chassis-900/60 p-4 rounded border border-chassis-800 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-copper-400 uppercase tracking-wider pb-2 border-b border-chassis-800">
                <Layers className="w-4 h-4" />
                <span>CHASSIS ARCHITECTURE</span>
              </div>
              
              {Object.entries(item.specs || {}).map(([key, val]) => (
                <div key={key} className="space-y-0.5">
                  <span className="text-[10px] text-chassis-600 uppercase tracking-tight block">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className="text-chassis-200 block text-[11px] break-words">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Narrative Description Section */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-mono text-copper-400 uppercase tracking-wider">
              <span className="w-2 h-2 bg-copper-500 rounded-sm"></span>
              <span>BENCH TEARDOWN NOTES & OBSERVATIONS</span>
            </div>
            
            <div className="p-5 rounded bg-chassis-900/70 border border-chassis-800 text-chassis-200 text-sm leading-relaxed whitespace-pre-line font-sans space-y-3">
              {item.description || item.symptom || item.summary}
            </div>
          </section>

          {/* Teardown Images Gallery */}
          {item.teardownImages && item.teardownImages.length > 0 && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-mono text-copper-400 uppercase tracking-wider">
                <Camera className="w-4 h-4" />
                <span>INTERNAL CIRCUITRY & DISASSEMBLY PHOTOGRAPHY</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {item.teardownImages.map((img, idx) => (
                  <div key={idx} className="rounded border border-chassis-800 overflow-hidden bg-chassis-900">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-3 text-xs text-chassis-400 bg-chassis-950/95 font-mono leading-relaxed border-t border-chassis-800">
                      <span className="text-copper-400 font-bold mr-1">FIG {idx + 1}:</span>
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Like Action Bar */}
          <div className="pt-4 border-t border-chassis-800 flex items-center justify-between">
            <button
              onClick={() => toggleLike(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all cursor-pointer ${
                itemLikes.userLiked
                  ? 'bg-copper-500/20 text-copper-400 border border-copper-500/50'
                  : 'bg-chassis-900 text-chassis-500 border border-chassis-700 hover:text-copper-400 hover:border-copper-500/40'
              }`}
            >
              <Heart className={`w-4 h-4 ${itemLikes.userLiked ? 'fill-copper-400 text-copper-400' : ''}`} />
              <span>{itemLikes.userLiked ? 'Liked Bench Log' : 'Respect this Log'} ({itemLikes.count})</span>
            </button>

            <span className="text-xs font-mono text-chassis-600">
              {itemComments.length} TRANSMISSION{itemComments.length === 1 ? '' : 'S'} IN THREAD
            </span>
          </div>

          {/* Comments & Transmissions Section */}
          <section className="pt-4 border-t border-chassis-800 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono text-chassis-200 uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 text-copper-400" />
              <span>BENCH NOTES & COMMUNITY TRANSMISSIONS</span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-chassis-900 p-4 rounded border border-chassis-800 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="commentAuthor" className="block text-[11px] font-mono text-chassis-500 mb-1">
                    YOUR CALLSIGN / NAME (OPTIONAL)
                  </label>
                  <input
                    id="commentAuthor"
                    type="text"
                    placeholder="e.g. VU2XYZ / SolderJunkie"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full bg-chassis-950 border border-chassis-700 rounded px-3 py-1.5 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="commentNote" className="block text-[11px] font-mono text-chassis-500 mb-1">
                  ADD A DIAGNOSTIC NOTE, TUBE EQUIVALENT, OR QUESTION
                </label>
                <textarea
                  id="commentNote"
                  rows="3"
                  required
                  placeholder="Share advice, alternate component substitutions, or questions..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full bg-chassis-950 border border-chassis-700 rounded p-3 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Note</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {itemComments.length === 0 ? (
                <div className="text-center py-6 text-xs font-mono text-chassis-600">
                  No transmissions yet on this chassis log. Be the first to leave a note!
                </div>
              ) : (
                itemComments.map((c) => (
                  <div key={c.id} className="bg-chassis-900/50 p-4 rounded border border-chassis-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-copper-400 font-semibold">{c.author}</span>
                      <span className="text-chassis-600 text-[11px]">{c.date}</span>
                    </div>
                    <p className="text-xs text-chassis-300 leading-relaxed font-sans">
                      {c.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
