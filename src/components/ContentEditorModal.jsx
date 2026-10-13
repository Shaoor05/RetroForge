import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Save, Trash2, Plus, Image as ImageIcon, FileText, Layers, Wrench, Sparkles } from 'lucide-react';

export const ContentEditorModal = () => {
  const { isEditorModalOpen, closeEditor, editorTarget, saveEditedContent, deleteRepair } = useApp();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editorTarget && editorTarget.data) {
      setFormData({ ...editorTarget.data });
    } else if (editorTarget && editorTarget.type === 'repair') {
      // New repair item defaults
      setFormData({
        name: 'New Vintage Apparatus',
        year: 1975,
        decade: '1970s',
        category: 'Radio',
        heroImage: '/images/murphy-mini-master-4-front.jpg',
        summary: 'Brief overview of what was inspected and restored on the bench...',
        description: 'Full teardown notes, schematic findings, replaced components, and circuit observations...',
        specs: {
          chassis: 'Custom Chassis Specification',
          power: '230V AC / 9V DC',
          audio: 'Discrete Output Stage'
        },
        teardownImages: []
      });
    } else {
      setFormData({});
    }
  }, [editorTarget]);

  if (!isEditorModalOpen) return null;

  const { type, id } = editorTarget;

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEditedContent(type, id, formData);
  };

  const handleSpecChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      specs: {
        ...(prev.specs || {}),
        [key]: value
      }
    }));
  };

  const handleAddSpec = () => {
    const key = prompt('Enter new specification label (e.g. "Speaker", "IF Frequency", "Power"):');
    if (key && key.trim()) {
      handleSpecChange(key.trim().toLowerCase(), 'Details...');
    }
  };

  const handleDeleteSpec = (keyToDelete) => {
    setFormData((prev) => {
      const nextSpecs = { ...(prev.specs || {}) };
      delete nextSpecs[keyToDelete];
      return { ...prev, specs: nextSpecs };
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={closeEditor}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-chassis-950 border border-copper-500/50 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 p-6 sm:p-8"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-chassis-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-copper-500 animate-pulse"></span>
            <div>
              <span className="text-[10px] font-mono uppercase text-copper-400">
                LIVE CONTENT EDITOR // {type.toUpperCase()}
              </span>
              <h2 className="font-serif text-2xl text-chassis-100">
                {id ? `Edit: ${formData.name || formData.title || 'Item'}` : `Add New ${type.toUpperCase()}`}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {id && type === 'repair' && (
              <button
                type="button"
                onClick={() => deleteRepair(id)}
                className="p-1.5 rounded bg-rose-950/40 border border-rose-500/30 text-rose-400 hover:bg-rose-900/60 transition-colors cursor-pointer"
                title="Delete this repair entry"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={closeEditor}
              className="p-1.5 rounded hover:bg-chassis-800 text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
          {type === 'repair' && (
            <>
              {/* Title & Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                    Apparatus / Model Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                    Year (e.g. 1968)
                  </label>
                  <input
                    type="number"
                    value={formData.year || ''}
                    onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) || '' })}
                    className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                    Category (Radio / Telephony / Audio / Test Equipment)
                  </label>
                  <input
                    type="text"
                    value={formData.category || 'Radio'}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                    Decade Tag (e.g. 1960s)
                  </label>
                  <input
                    type="text"
                    value={formData.decade || '1960s'}
                    onChange={(e) => setFormData({ ...formData, decade: e.target.value })}
                    className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Hero Image URL */}
              <div>
                <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                  Hero Image Path / URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={formData.heroImage || ''}
                    onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                    placeholder="/images/... or https://..."
                    className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                  />
                </div>
                <span className="text-[10px] text-chassis-600 mt-1 block">
                  Available local photos: /images/murphy-mini-master-4-front.jpg, /images/murphy-sinus-internal-chassis.jpg, /images/philips-radio-teardown-open.jpg, /images/philips-radio-rf-pcb-detail.jpg, /images/panasonic-phone-teardown.jpg, /images/shaoor-soldering-bench.jpg
                </span>
              </div>

              {/* Summary */}
              <div>
                <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                  Short Summary (Shown on Bench Card)
                </label>
                <input
                  type="text"
                  value={formData.summary || ''}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="One sentence summary of the teardown..."
                  className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans"
                />
              </div>

              {/* Full Description / Teardown Story */}
              <div>
                <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                  Complete Project Description & Teardown Notes
                </label>
                <textarea
                  rows="7"
                  required
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Write the full narrative of what happened on the bench..."
                  className="w-full bg-chassis-900 border border-chassis-700 rounded p-3 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans text-sm leading-relaxed"
                ></textarea>
              </div>

              {/* Specs Editor */}
              <div className="space-y-3 p-4 bg-chassis-900/60 rounded border border-chassis-800">
                <div className="flex items-center justify-between">
                  <span className="text-copper-400 uppercase font-bold">Chassis Specifications</span>
                  <button
                    type="button"
                    onClick={handleAddSpec}
                    className="flex items-center gap-1 text-[11px] text-copper-400 hover:text-copper-300 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Spec Field</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(formData.specs || {}).map(([k, v]) => (
                    <div key={k} className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-chassis-500 uppercase">
                        <span>{k}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteSpec(k)}
                          className="text-rose-400 hover:text-rose-300"
                        >
                          remove
                        </button>
                      </div>
                      <input
                        type="text"
                        value={v}
                        onChange={(e) => handleSpecChange(k, e.target.value)}
                        className="w-full bg-chassis-950 border border-chassis-700 rounded px-2.5 py-1 text-chassis-100 text-xs font-sans"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {type === 'about' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                    Engineering Title / Subtitle
                  </label>
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                  Workbench Photo Path / URL
                </label>
                <input
                  type="text"
                  value={formData.workspaceImage || ''}
                  onChange={(e) => setFormData({ ...formData, workspaceImage: e.target.value })}
                  className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                  Workbench Photo Caption
                </label>
                <input
                  type="text"
                  value={formData.workspaceCaption || ''}
                  onChange={(e) => setFormData({ ...formData, workspaceCaption: e.target.value })}
                  className="w-full bg-chassis-900 border border-chassis-700 rounded px-3 py-2 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] text-chassis-400 uppercase mb-1">
                  About Bio Text
                </label>
                <textarea
                  rows="8"
                  required
                  value={formData.bio || ''}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full bg-chassis-900 border border-chassis-700 rounded p-3 text-chassis-100 focus:border-copper-500 focus:outline-none font-sans text-sm leading-relaxed"
                ></textarea>
              </div>
            </>
          )}

          {/* Action buttons */}
          <div className="pt-4 border-t border-chassis-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeEditor}
              className="px-4 py-2 rounded bg-chassis-900 hover:bg-chassis-850 border border-chassis-700 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-amber-glow"
            >
              <Save className="w-4 h-4" />
              <span>Save & Publish Live</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
