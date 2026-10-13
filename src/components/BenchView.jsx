import React from 'react';
import { useApp } from '../context/AppContext';
import { BenchCard } from './BenchCard';
import { vintageAudio } from '../utils/audio';
import { Wrench, Search, RotateCcw, Layers, Plus, Shield } from 'lucide-react';

export const BenchView = () => {
  const {
    repairs,
    isAdmin,
    openEditor,
    filterDecade,
    setFilterDecade,
    filterCategory,
    setFilterCategory,
    searchQuery,
    setSearchQuery,
  } = useApp();

  const decades = ['All', '1940s', '1950s', '1960s', '1970s', '1980s', '2000s'];
  const categories = ['All', 'Radio', 'Telephony', 'Audio', 'Test Equipment'];

  const handleDecadeChange = (dec) => {
    vintageAudio.playSwitch();
    setFilterDecade(dec);
  };

  const handleCategoryChange = (cat) => {
    vintageAudio.playSwitch();
    setFilterCategory(cat);
  };

  const resetFilters = () => {
    vintageAudio.playSwitch();
    setFilterDecade('All');
    setFilterCategory('All');
    setSearchQuery('');
  };

  // Filter items
  const filteredRepairs = repairs.filter((item) => {
    const matchesDecade = filterDecade === 'All' || item.decade === filterDecade;
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const searchTarget = `${item.name} ${item.description || ''} ${item.summary || ''} ${item.symptom || ''} ${item.category} ${item.year}`.toLowerCase();
    const matchesSearch = searchQuery === '' || searchTarget.includes(searchQuery.toLowerCase());

    return matchesDecade && matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Archive Header */}
      <div className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-chassis-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-copper-400">
            <Wrench className="w-4 h-4 text-copper-400" />
            <span className="uppercase tracking-wider">APPARATUS ARCHIVE & BENCH TEARDOWNS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-chassis-500">
              {filteredRepairs.length} OF {repairs.length} SPECIMENS
            </span>

            {isAdmin && (
              <button
                onClick={() => openEditor('repair', null)}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Teardown</span>
              </button>
            )}
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-chassis-100">
          The Bench: Vintage Electronics Teardowns & Restorations
        </h1>
        <p className="text-sm text-chassis-400 leading-relaxed font-sans max-w-3xl">
          Detailed teardowns and technical write-ups of restored transistor superhets, rotary telephony apparatus, cordless handsets, and analog audio circuits from the 1940s to 2000s.
        </p>
      </div>

      {/* Filter Control Console */}
      <div className="bg-chassis-900/80 border border-chassis-800 rounded-lg p-5 space-y-4 shadow-chassis-raised">
        {/* Search & Reset Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-chassis-800">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-chassis-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by model, chassis, category, or component..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-1.5 text-xs text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"
            />
          </div>

          <button
            onClick={resetFilters}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-chassis-950 border border-chassis-700 hover:text-copper-400 text-chassis-500 transition-colors cursor-pointer flex-shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Filter Selectors */}
        <div className="space-y-3">
          {/* Decade Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-[11px] font-mono text-chassis-500 w-24 flex-shrink-0 uppercase">
              Decade Era:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {decades.map((dec) => (
                <button
                  key={dec}
                  onClick={() => handleDecadeChange(dec)}
                  className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors cursor-pointer ${
                    filterDecade === dec
                      ? 'bg-copper-500/20 text-copper-400 border-copper-500 font-semibold'
                      : 'bg-chassis-950 text-chassis-500 border-chassis-800 hover:text-chassis-200'
                  }`}
                >
                  {dec}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-[11px] font-mono text-chassis-500 w-24 flex-shrink-0 uppercase">
              Category:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors cursor-pointer ${
                    filterCategory === cat
                      ? 'bg-copper-500/20 text-copper-400 border-copper-500 font-semibold'
                      : 'bg-chassis-950 text-chassis-500 border-chassis-800 hover:text-chassis-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Specimen Tile Grid */}
      {filteredRepairs.length === 0 ? (
        <div className="text-center py-16 bg-chassis-900/40 rounded-lg border border-chassis-800 space-y-3 font-mono">
          <Layers className="w-8 h-8 text-chassis-600 mx-auto" />
          <p className="text-sm text-chassis-400">No vintage specimens match the active filters.</p>
          <button
            onClick={resetFilters}
            className="text-xs text-copper-400 underline hover:text-copper-300 cursor-pointer"
          >
            Clear all filters and search parameters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepairs.map((item, idx) => (
            <BenchCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
};
