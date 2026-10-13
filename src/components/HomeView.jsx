import React from 'react';
import { useApp } from '../context/AppContext';
import { buildsData } from '../data/buildsData';
import { logData } from '../data/logData';
import { BenchCard } from './BenchCard';
import { ThreeCanvas } from './ThreeCanvas';
import { ArrowRight, ArrowUpRight, Cpu, BookOpen, Wrench, Terminal, Sparkles, Mail, Edit3 } from 'lucide-react';

export const HomeView = () => {
  const { navigateTo, openRepairModal, repairs, about, isAdmin, openEditor } = useApp();
  const flagshipBuild = buildsData[0];
  const firstLog = logData[0];

  return (
    <div className="space-y-24 max-w-5xl mx-auto">
      {/* 1. Hero Section */}
      <section className="pt-6 sm:pt-12 space-y-8 border-b border-chassis-800/60 pb-16">
        <div className="flex items-center gap-3 text-xs font-mono text-chassis-500">
          <span className="inline-block w-2 h-2 rounded-full bg-copper-400 animate-pulse"></span>
          <span>{about.name || 'Shaoor Ahmad'} · B.Tech EnTC Student</span>
          <span>·</span>
          <span>Pune / Mumbai</span>
        </div>

        <div className="space-y-4">
          <h1 className="font-serif text-5xl sm:text-7xl text-chassis-100 tracking-tight font-normal">
            RetroForge
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-copper-400 max-w-3xl leading-relaxed font-normal">
            I take apart things other people throw away — radios, phones, tape decks from the 1940s to the 2000s — and figure out what's inside them.
          </p>
        </div>

        <p className="text-sm sm:text-base text-chassis-400 font-sans max-w-2xl leading-relaxed">
          Currently documenting vintage radio superhets, telephony handsets, and building an 8-bit computer from bare logic ICs.
        </p>

        {/* Quick jump tags */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono">
          <button
            onClick={() => navigateTo('bench')}
            className="flex items-center gap-1 text-copper-400 hover:text-copper-300 transition-colors cursor-pointer"
          >
            <span>01 The Bench</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-chassis-700">·</span>
          <button
            onClick={() => navigateTo('builds')}
            className="flex items-center gap-1 text-bakelite-400 hover:text-bakelite-300 transition-colors cursor-pointer"
          >
            <span>02 Builds</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-chassis-700">·</span>
          <button
            onClick={() => navigateTo('log')}
            className="flex items-center gap-1 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer"
          >
            <span>03 Log</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-chassis-700">·</span>
          <button
            onClick={() => navigateTo('junk')}
            className="flex items-center gap-1 text-chassis-400 hover:text-chassis-200 transition-colors cursor-pointer"
          >
            <span>04 Send Me Your Junk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 2. Introduction & 3D Interactive Workbench */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-copper-400">
                <span className="text-chassis-600">00 /</span>
                <span className="uppercase tracking-wider">INTRODUCTION</span>
              </div>

              {isAdmin && (
                <button
                  onClick={() => openEditor('about', null)}
                  className="flex items-center gap-1 text-xs font-mono text-copper-400 hover:underline cursor-pointer"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit Bio</span>
                </button>
              )}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-chassis-100">
              Hi, I'm {about.name || 'Shaoor Ahmad'}
            </h2>

            <p className="text-sm text-chassis-300 leading-relaxed font-sans pt-1 whitespace-pre-line">
              {about.bio}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono">
              <button
                onClick={() => navigateTo('about')}
                className="text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Read more about my background</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3D Vacuum Tube Interactive Element */}
          <div className="lg:col-span-5 bg-chassis-900/60 rounded-lg border border-chassis-800/80 overflow-hidden shadow-sm">
            <ThreeCanvas />
          </div>
        </div>

        {/* Workspace Photo Box with Authentic Bench Soldering & Teardown Strip */}
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-chassis-800/80 bg-chassis-900/40">
            <div className="p-3 bg-chassis-950/90 border-b border-chassis-800/80 flex items-center justify-between text-xs font-mono text-chassis-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse"></span>
                <span>RETROFORGE BENCH // ACTIVE PROTOTYPING</span>
              </div>
              <span className="text-copper-400">Soldering Station · Perfboard Bus Routing · Flux Extraction</span>
            </div>
            <div className="relative group">
              <img
                src={about.workspaceImage}
                alt="Shaoor Ahmad Soldering at the Bench"
                className="w-full h-64 sm:h-96 object-cover brightness-95 contrast-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-chassis-950 via-chassis-950/80 to-transparent p-4 sm:p-5">
                <p className="text-xs sm:text-sm font-mono text-chassis-100 font-medium">
                  Shaoor Ahmad building point-to-point logic circuits & testing vintage RF stages on the bench.
                </p>
                <p className="text-[11px] font-mono text-chassis-400 mt-0.5">
                  Real hands-on teardowns: Murphy India Sinus Transistor Radio, Philips Portable Superhet & Panasonic Cordless Handset.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Teardown Gallery Preview (Murphy, Philips, Panasonic) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div 
              onClick={() => openRepairModal('murphy-mini-master-4')}
              className="group bg-chassis-900/80 hover:bg-chassis-900 border border-chassis-800 hover:border-copper-500/50 rounded p-3 transition-all cursor-pointer space-y-2"
            >
              <div className="h-28 rounded overflow-hidden border border-chassis-800">
                <img
                  src="/images/murphy-sinus-internal-chassis.jpg"
                  alt="Murphy Sinus Chassis Teardown"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-mono">
                <span className="text-copper-400 font-bold block">Murphy Sinus Chassis</span>
                <span className="text-chassis-500 text-[11px]">3Ω Speaker · Ferrite Bar · IF Cans</span>
              </div>
            </div>

            <div 
              onClick={() => openRepairModal('philips-portable-radio')}
              className="group bg-chassis-900/80 hover:bg-chassis-900 border border-chassis-800 hover:border-copper-500/50 rounded p-3 transition-all cursor-pointer space-y-2"
            >
              <div className="h-28 rounded overflow-hidden border border-chassis-800">
                <img
                  src="/images/philips-radio-teardown-open.jpg"
                  alt="Philips Radio Teardown"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-mono">
                <span className="text-copper-400 font-bold block">Philips Multi-Band Radio</span>
                <span className="text-chassis-500 text-[11px]">Internal Transformer & RF PCB</span>
              </div>
            </div>

            <div 
              onClick={() => openRepairModal('panasonic-cordless')}
              className="group bg-chassis-900/80 hover:bg-chassis-900 border border-chassis-800 hover:border-copper-500/50 rounded p-3 transition-all cursor-pointer space-y-2"
            >
              <div className="h-28 rounded overflow-hidden border border-chassis-800">
                <img
                  src="/images/panasonic-phone-teardown.jpg"
                  alt="Panasonic Cordless Phone Teardown"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-mono">
                <span className="text-copper-400 font-bold block">Panasonic Cordless Handset</span>
                <span className="text-chassis-500 text-[11px]">3-Tier Teardown · LCD · Keypad Matrix</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 01: The Bench */}
      <section className="space-y-6 pt-6 border-t border-chassis-800/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-chassis-800/80 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-copper-400 mb-1">
              <span className="text-chassis-600">01 /</span>
              <span className="uppercase tracking-wider">THE BENCH</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-chassis-100">
              "Things I've opened up, diagnosed, and brought back."
            </h2>
          </div>

          <button
            onClick={() => navigateTo('bench')}
            className="text-xs font-mono text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer flex-shrink-0"
          >
            <span>View All ({repairs.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* The Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repairs.slice(0, 3).map((item, idx) => (
            <BenchCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* 4. Section 02: Builds */}
      <section className="space-y-6 pt-6 border-t border-chassis-800/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-chassis-800/80 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-bakelite-400 mb-1">
              <span className="text-chassis-600">02 /</span>
              <span className="uppercase tracking-wider">BUILDS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-chassis-100">
              "Things I'm making from scratch."
            </h2>
          </div>

          <button
            onClick={() => navigateTo('builds')}
            className="text-xs font-mono text-bakelite-400 hover:text-bakelite-300 flex items-center gap-1 transition-colors cursor-pointer flex-shrink-0"
          >
            <span>Open Builds Section</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bare-IC Computer Showcase Card */}
        <div 
          onClick={() => navigateTo('builds')}
          className="group bg-chassis-900/60 hover:bg-chassis-900 border border-chassis-800/80 hover:border-bakelite-500/50 p-6 sm:p-8 rounded-lg transition-all cursor-pointer shadow-sm space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs border-b border-chassis-800/80 pb-3">
            <span className="text-bakelite-400 font-bold uppercase tracking-wider">
              {flagshipBuild.title} — {flagshipBuild.status}
            </span>
            <div className="flex items-center gap-1 text-chassis-500">
              <span>View full build log</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-sm sm:text-base text-chassis-300 font-sans leading-relaxed">
            {flagshipBuild.subtitle}
          </p>

          {/* Dated entries preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {flagshipBuild.buildLogs.map((log) => (
              <div key={log.entryNumber} className="bg-chassis-950 p-4 rounded border border-chassis-800 space-y-1.5">
                <span className="text-xs font-mono text-bakelite-400 font-bold block">
                  Entry {log.entryNumber} — {log.title}
                </span>
                <p className="text-xs text-chassis-400 font-sans leading-relaxed">
                  {log.content}
                </p>
              </div>
            ))}
          </div>

          <div className="text-xs font-mono text-chassis-500 italic pt-1">
            {flagshipBuild.futureNote}
          </div>
        </div>
      </section>

      {/* 5. Section 03: Log */}
      <section className="space-y-6 pt-6 border-t border-chassis-800/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-chassis-800/80 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-copper-400 mb-1">
              <span className="text-chassis-600">03 /</span>
              <span className="uppercase tracking-wider">LOG</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-chassis-100">
              "Where the mistakes live."
            </h2>
          </div>

          <button
            onClick={() => navigateTo('log')}
            className="text-xs font-mono text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer flex-shrink-0"
          >
            <span>Open Log</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <article 
          onClick={() => navigateTo('log')}
          className="group bg-chassis-900/60 hover:bg-chassis-900 border border-chassis-800/80 hover:border-chassis-700 p-6 sm:p-8 rounded-lg transition-all cursor-pointer shadow-sm space-y-3"
        >
          <div className="flex items-center justify-between font-mono text-xs text-copper-400 border-b border-chassis-800/80 pb-3">
            <span className="font-bold">{firstLog.title}</span>
            <div className="flex items-center gap-1 text-chassis-500">
              <span>{firstLog.readingTime}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
          <p className="text-sm text-chassis-300 font-sans leading-relaxed">
            {firstLog.content}
          </p>
        </article>
      </section>

      {/* 6. Section 04: Send Me Your Junk Callout */}
      <section className="bg-chassis-900/80 border border-chassis-800/80 p-8 rounded-lg space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono text-copper-400">
          <span className="text-chassis-600">04 /</span>
          <span className="uppercase tracking-wider">SEND ME YOUR JUNK</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-chassis-100">
          Got something old and broken sitting in a cupboard?
        </h2>

        <p className="text-sm text-chassis-300 leading-relaxed font-sans max-w-2xl">
          If you've got an old radio, phone, tape player, or similar electronics that doesn't work and you don't know why — that's exactly what I'm looking for. No obligation, no charge.
        </p>

        <div className="pt-2">
          <button
            onClick={() => navigateTo('junk')}
            className="px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold rounded flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>Open Intake Questionnaire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
