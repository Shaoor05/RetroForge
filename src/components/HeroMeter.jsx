import React, { useState, useEffect } from 'react';
import { vintageAudio } from '../utils/audio';
import { Zap, Activity, Radio, Cpu } from 'lucide-react';

export const HeroMeter = () => {
  const [meterMode, setMeterMode] = useState('signal'); // 'signal' | 'filament' | 'grid' | 'agc'
  const [needleAngle, setNeedleAngle] = useState(-45); // -45 deg (0) to +45 deg (100)
  const [isWarmingUp, setIsWarmingUp] = useState(true);
  const [tubeGlow, setTubeGlow] = useState(true);

  // Meter mode targets
  const modeData = {
    signal: { label: 'RF CARRIER (dBm)', value: ' -18 dBm', targetAngle: 18, color: '#E05D4F', sub: 'FM Band: 98.5 MHz Superhet IF' },
    filament: { label: 'FILAMENT B+ (V DC)', value: ' 265.4 V', targetAngle: 24, color: '#EA7262', sub: 'EL84 Cathode Bias: 7.2V' },
    grid: { label: 'GRID BIAS (V DC)', value: ' -14.2 V', targetAngle: -15, color: '#617290', sub: 'Push-Pull Class AB Balance' },
    agc: { label: 'AGC LOOP VOLTAGE', value: ' -2.8 V', targetAngle: -5, color: '#7788A6', sub: '6AU6 IF Limiter Feedback' },
  };

  // Orchestrated power-on sweep on mount
  useEffect(() => {
    // Initial delay, then sweep to 100% full-scale deflection, then bounce back to nominal
    const timer1 = setTimeout(() => {
      setNeedleAngle(45); // Full scale deflection
      vintageAudio.playMeterThump();
    }, 400);

    const timer2 = setTimeout(() => {
      setNeedleAngle(-40); // Under-damped return bounce
    }, 1100);

    const timer3 = setTimeout(() => {
      setNeedleAngle(modeData[meterMode].targetAngle); // Settled operating state
      setIsWarmingUp(false);
      vintageAudio.playRelayClick();
    }, 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleModeChange = (mode) => {
    vintageAudio.playSwitch();
    setMeterMode(mode);
    setNeedleAngle(modeData[mode].targetAngle + (Math.random() * 6 - 3));
  };

  const handleManualTap = () => {
    vintageAudio.playMeterThump();
    const current = modeData[meterMode].targetAngle;
    setNeedleAngle(Math.min(45, current + 25));
    setTimeout(() => {
      setNeedleAngle(current);
    }, 300);
  };

  const toggleFilament = () => {
    vintageAudio.playSwitch();
    setTubeGlow(!tubeGlow);
  };

  const activeInfo = modeData[meterMode];

  return (
    <div className="relative bg-chassis-900 border border-chassis-800 rounded-lg p-6 shadow-chassis-raised overflow-hidden">
      {/* Corner Mounting Screws */}
      <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-chassis-700 border border-chassis-850 flex items-center justify-center">
        <div className="w-1.5 h-[0.5px] bg-chassis-950 rotate-45"></div>
      </div>
      <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-chassis-700 border border-chassis-850 flex items-center justify-center">
        <div className="w-1.5 h-[0.5px] bg-chassis-950 -rotate-45"></div>
      </div>
      <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-chassis-700 border border-chassis-850 flex items-center justify-center">
        <div className="w-1.5 h-[0.5px] bg-chassis-950 rotate-12"></div>
      </div>
      <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-chassis-700 border border-chassis-850 flex items-center justify-center">
        <div className="w-1.5 h-[0.5px] bg-chassis-950 -rotate-30"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Meter Display Unit */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div 
            onClick={handleManualTap}
            title="Click meter to tap glass / test mechanical movement"
            className="w-full max-w-[340px] bg-[#1A1816] border-2 border-chassis-700 rounded-t-full rounded-b-lg p-4 pt-6 shadow-inner relative cursor-pointer select-none group"
          >
            {/* Bezel Glass Highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40 rounded-t-full rounded-b-lg pointer-events-none"></div>

            {/* Scale Markings */}
            <svg viewBox="0 0 200 110" className="w-full h-auto">
              {/* Arc background */}
              <path
                d="M 25 95 A 80 80 0 0 1 175 95"
                fill="none"
                stroke="#3B3833"
                strokeWidth="4"
              />
              {/* Coral Warning / Peak Zone */}
              <path
                d="M 145 38 A 80 80 0 0 1 175 95"
                fill="none"
                stroke="#E05D4F"
                strokeWidth="4"
                strokeDasharray="2,2"
              />
              {/* Primary Operating Range */}
              <path
                d="M 80 20 A 80 80 0 0 1 145 38"
                fill="none"
                stroke="#617290"
                strokeWidth="4"
              />

              {/* Tick Marks */}
              {[-40, -30, -20, -10, 0, 10, 20, 30, 40].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x1 = 100 + 74 * Math.sin(rad);
                const y1 = 95 - 74 * Math.cos(rad);
                const x2 = 100 + (i % 2 === 0 ? 64 : 68) * Math.sin(rad);
                const y2 = 95 - (i % 2 === 0 ? 64 : 68) * Math.cos(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i > 6 ? '#E05D4F' : i > 3 ? '#EA7262' : '#B2AAA0'}
                    strokeWidth={i % 2 === 0 ? '1.5' : '1'}
                  />
                );
              })}

              {/* Text labels on dial */}
              <text x="35" y="85" fill="#7E776F" fontSize="6" fontFamily="JetBrains Mono">0</text>
              <text x="65" y="45" fill="#7E776F" fontSize="6" fontFamily="JetBrains Mono">20</text>
              <text x="96" y="32" fill="#E05D4F" fontSize="7" fontFamily="JetBrains Mono" fontWeight="bold">50</text>
              <text x="130" y="45" fill="#E05D4F" fontSize="6" fontFamily="JetBrains Mono">80</text>
              <text x="160" y="85" fill="#E05D4F" fontSize="6" fontFamily="JetBrains Mono">100%</text>
              <text x="100" y="70" textAnchor="middle" fill="#B2AAA0" fontSize="6.5" fontFamily="DM Serif Display">
                RETROFORGE D’ARSONVAL GALVANOMETER
              </text>
              <text x="100" y="80" textAnchor="middle" fill="#7E776F" fontSize="5" fontFamily="JetBrains Mono">
                ZERO-CENTER CALIBRATED // 50 uA FS
              </text>

              {/* Pivot Hub */}
              <circle cx="100" cy="95" r="7" fill="#2C2926" stroke="#56504A" strokeWidth="1.5" />
              <circle cx="100" cy="95" r="2.5" fill="#E05D4F" />

              {/* Needle */}
              <g
                style={{
                  transformOrigin: '100px 95px',
                  transform: `rotate(${needleAngle}deg)`,
                  transition: isWarmingUp ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'transform 0.35s ease-out'
                }}
              >
                {/* Needle blade */}
                <line x1="100" y1="95" x2="100" y2="20" stroke="#FFF8F0" strokeWidth="1.2" strokeLinecap="round" />
                <polygon points="100,16 98,24 102,24" fill="#E05D4F" />
                {/* Counterweight */}
                <line x1="100" y1="95" x2="100" y2="103" stroke="#56504A" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </svg>

            {/* Readout plate beneath glass */}
            <div className="mt-2 bg-chassis-950 border border-chassis-800 rounded px-2.5 py-1.5 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-ping"></span>
                <span className="text-chassis-500 uppercase text-[10px]">{activeInfo.label}</span>
              </div>
              <div className="text-copper-400 font-bold text-sm">
                {activeInfo.value}
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-chassis-600 mt-2 flex items-center gap-2">
            <span>[TAP GLASS TO TEST MOVEMENT]</span>
          </div>
        </div>

        {/* Right: Instrument Controls & Concept Line */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase bg-copper-500/10 text-copper-400 px-2 py-0.5 rounded border border-copper-500/30">
                BENCH TELEMETRY
              </span>
              <span className="text-xs font-mono text-chassis-600">
                {activeInfo.sub}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-chassis-100 leading-snug">
              Resurrecting forgotten silicon, vacuum tubes, and telecommunication hardware from 1940–2000.
            </h3>
            <p className="text-xs text-chassis-500 mt-2 leading-relaxed">
              Every capacitor recapped, line relay unseized, and bare-TTL computer instruction cycled is logged right here. Real voltage drops, actual mistakes, and raw diagnostic notes.
            </p>
          </div>

          {/* Mode Selector Knobs */}
          <div>
            <span className="text-[11px] font-mono text-chassis-500 uppercase tracking-wider block mb-2">
              Select Meter Probe Channel:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'signal', label: 'RF Signal', icon: Radio },
                { id: 'filament', label: 'B+ Filament', icon: Zap },
                { id: 'grid', label: 'Grid Bias', icon: Activity },
                { id: 'agc', label: 'AGC Loop', icon: Cpu },
              ].map((btn) => {
                const Icon = btn.icon;
                const isSelected = meterMode === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => handleModeChange(btn.id)}
                    className={`px-2.5 py-2 rounded text-xs font-mono flex items-center justify-center gap-1.5 transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-chassis-850 text-copper-400 border-copper-500/60 shadow-chassis-inset'
                        : 'bg-chassis-950/60 text-chassis-500 border-chassis-800 hover:text-chassis-200 hover:border-chassis-700'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-copper-400' : 'text-chassis-600'}`} />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tube Glow & Bench Health Indicator */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-chassis-800 text-xs font-mono">
            <button
              onClick={toggleFilament}
              className="flex items-center gap-2 text-chassis-500 hover:text-copper-400 transition-colors cursor-pointer"
            >
              <div className={`w-3 h-3 rounded-full border transition-all ${
                tubeGlow ? 'bg-amber-500 border-amber-300 shadow-amber-glow animate-pulse' : 'bg-chassis-800 border-chassis-700'
              }`} />
              <span>VACUUM TUBE HEATER: {tubeGlow ? '6.3V AC (GLOWING)' : 'OFF'}</span>
            </button>
            <div className="text-chassis-600 text-[11px]">
              CALIBRATION: 0.05% NIST REF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
