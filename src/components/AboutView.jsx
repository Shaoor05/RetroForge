import React from 'react';
import { useApp } from '../context/AppContext';
import { User, Mail, MapPin, Wrench, Camera, Cpu, Sparkles, ArrowRight, Edit3 } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';

export const AboutView = () => {
  const { about, isAdmin, openEditor, navigateTo } = useApp();

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Bio Section */}
      <div className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-6">
        <div className="border-b border-chassis-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono uppercase text-copper-400">
              ENGINEERING & MAKER LOG
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-chassis-100 mt-1">
              About {about.name || 'Shaoor Ahmad'}
            </h1>
            <p className="text-xs font-mono text-chassis-500 mt-1">
              {about.title || 'Fourth-Year B.Tech Student • Electronics & Telecommunication Engineering'}
            </p>
          </div>

          {isAdmin && (
            <button
              onClick={() => openEditor('about', null)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Bio & Photos</span>
            </button>
          )}
        </div>

        {/* 3D Model & Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 text-sm text-chassis-300 leading-relaxed font-sans whitespace-pre-line space-y-4">
            {about.bio}
          </div>

          <div className="md:col-span-5 bg-chassis-950 rounded-lg border border-chassis-800 overflow-hidden shadow-chassis-inset">
            <ThreeCanvas />
          </div>
        </div>

        {/* Main Bench Soldering Photo */}
        <div className="pt-4 border-t border-chassis-800">
          <div className="relative rounded overflow-hidden border border-chassis-800 bg-chassis-950">
            <img
              src={about.workspaceImage}
              alt="Shaoor Ahmad Soldering"
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="p-3 bg-chassis-950/95 border-t border-chassis-800 text-xs font-mono text-chassis-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-copper-400 font-bold">{about.workspaceCaption || 'Shaoor soldering prototype point-to-point PCB circuitry at the RetroForge bench under safety extraction.'}</span>
              <span className="text-[11px] text-chassis-500">Flux Smoke Extraction · Hakko Station · Perfboard Logic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Teardown & Bench Photography Section */}
      <div className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-6">
        <div className="border-b border-chassis-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-copper-400">
              <Camera className="w-4 h-4" />
              <span className="uppercase tracking-wider">BENCH LOG ARCHIVE // PHOTOGRAPHY</span>
            </div>
            <h2 className="font-serif text-2xl text-chassis-100 mt-1">
              Vintage Apparatus Teardowns & Internal Circuitry
            </h2>
          </div>

          <button
            onClick={() => navigateTo('bench')}
            className="text-xs font-mono text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Explore All Bench Logs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {(about.benchGallery || []).map((photo, idx) => (
            <div 
              key={idx} 
              className="bg-chassis-950 rounded border border-chassis-800 overflow-hidden group hover:border-copper-500/50 transition-all"
            >
              <div className="h-56 overflow-hidden bg-chassis-900 relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-1 font-mono">
                <span className="text-xs text-copper-400 font-bold block">
                  {photo.title}
                </span>
                <p className="text-[11px] text-chassis-500 font-sans leading-relaxed">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
