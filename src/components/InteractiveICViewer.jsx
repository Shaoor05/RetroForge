import React, { useState, useEffect } from 'react';
import { vintageAudio } from '../utils/audio';
import { Play, Pause, StepForward, RotateCcw, Cpu, Sparkles } from 'lucide-react';

export const InteractiveICViewer = () => {
  const [regA, setRegA] = useState(13); // 8-bit decimal
  const [regB, setRegB] = useState(8);
  const [aluOp, setAluOp] = useState('ADD'); // 'ADD', 'SUB', 'AND', 'OR', 'XOR'
  const [progCounter, setProgCounter] = useState(3);
  const [clockRunning, setClockRunning] = useState(false);
  const [clockTick, setClockTick] = useState(false);

  // Compute ALU output
  let result = 0;
  let carry = false;
  let zero = false;

  switch (aluOp) {
    case 'ADD':
      result = (regA + regB) & 0xFF;
      carry = regA + regB > 0xFF;
      break;
    case 'SUB':
      result = (regA - regB + 256) & 0xFF;
      carry = regA >= regB;
      break;
    case 'AND':
      result = (regA & regB) & 0xFF;
      break;
    case 'OR':
      result = (regA | regB) & 0xFF;
      break;
    case 'XOR':
      result = (regA ^ regB) & 0xFF;
      break;
    default:
      result = regA;
  }
  zero = result === 0;

  // Auto-clock effect
  useEffect(() => {
    let interval = null;
    if (clockRunning) {
      interval = setInterval(() => {
        singleStep();
      }, 700);
    }
    return () => clearInterval(interval);
  }, [clockRunning, regA, regB, progCounter]);

  const singleStep = () => {
    vintageAudio.playRelayClick();
    setClockTick(true);
    setTimeout(() => setClockTick(false), 200);

    // Increment PC and simulate Fibonacci sequence step
    setProgCounter((prev) => (prev + 1) % 16);
    setRegB(regA);
    setRegA((prev) => {
      const next = (prev + regB) % 256;
      return next === 0 ? 1 : next;
    });
  };

  const handleReset = () => {
    vintageAudio.playSwitch();
    setRegA(1);
    setRegB(1);
    setProgCounter(0);
    setClockRunning(false);
  };

  // Convert number to 8-bit binary array
  const toBits = (num) => {
    const bin = (num >>> 0).toString(2).padStart(8, '0');
    return bin.split('').map((b) => b === '1');
  };

  return (
    <div className="bg-chassis-950/80 border border-bakelite-500/40 rounded-lg p-5 sm:p-6 text-chassis-500 font-mono shadow-chassis-raised space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bakelite-500/30 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-bakelite-400" />
          <div>
            <h4 className="font-serif text-lg text-chassis-100">
              Interactive 74LS-Logic Bus Simulator
            </h4>
            <p className="text-[11px] text-bakelite-400">
              Direct register state manipulation & ALU accumulator monitoring
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              vintageAudio.playSwitch();
              setClockRunning(!clockRunning);
            }}
            className={`px-3 py-1.5 rounded text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              clockRunning
                ? 'bg-copper-600 text-chassis-100 shadow-amber-glow'
                : 'bg-bakelite-500 hover:bg-bakelite-400 text-chassis-950'
            }`}
          >
            {clockRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{clockRunning ? 'HALT CLK' : 'RUN 1.5Hz'}</span>
          </button>

          <button
            onClick={singleStep}
            disabled={clockRunning}
            className="px-3 py-1.5 rounded text-xs font-mono bg-chassis-900 border border-chassis-700 hover:border-copper-400 text-chassis-200 hover:text-copper-400 disabled:opacity-40 flex items-center gap-1 transition-colors cursor-pointer"
            title="Trigger single debounced clock pulse"
          >
            <StepForward className="w-3.5 h-3.5" />
            <span>STEP</span>
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded text-xs bg-chassis-900 border border-chassis-700 hover:text-copper-400 text-chassis-500 transition-colors cursor-pointer"
            title="Reset registers"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Bus & IC Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Module 1: Program Counter & Clock */}
        <div className="bg-chassis-900/70 p-4 rounded border border-chassis-800 space-y-3">
          <div className="flex items-center justify-between text-xs border-b border-chassis-800 pb-1">
            <span className="text-bakelite-400 font-bold uppercase">74LS161 COUNTER</span>
            <span className={`w-2 h-2 rounded-full ${clockTick ? 'bg-copper-400 shadow-amber-glow' : 'bg-chassis-800'}`}></span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-chassis-500">PROGRAM COUNTER (PC):</span>
            <span className="text-base text-copper-400 font-bold">0x{progCounter.toString(16).toUpperCase().padStart(2, '0')}</span>
          </div>

          <div>
            <span className="text-[10px] text-chassis-600 uppercase block mb-1">4-BIT ADDRESS BUS:</span>
            <div className="flex gap-1.5 justify-between">
              {toBits(progCounter).slice(4).map((bit, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className={`w-3.5 h-3.5 rounded-full border ${
                    bit ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-chassis-950 border-chassis-800'
                  }`}></span>
                  <span className="text-[9px] text-chassis-600 mt-0.5">A{3 - idx}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module 2: Accumulator Register A */}
        <div className="bg-chassis-900/70 p-4 rounded border border-chassis-800 space-y-3">
          <div className="flex items-center justify-between text-xs border-b border-chassis-800 pb-1">
            <span className="text-bakelite-400 font-bold uppercase">74LS173 REG A (ACC)</span>
            <span className="text-chassis-200">{regA} (0x{regA.toString(16).toUpperCase().padStart(2, '0')})</span>
          </div>

          <div>
            <span className="text-[10px] text-chassis-600 uppercase block mb-1">8-BIT DATA BITS (D7-D0):</span>
            <div className="flex gap-1 justify-between">
              {toBits(regA).map((bit, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className={`w-3 h-3 rounded-full border ${
                    bit ? 'bg-copper-400 border-copper-300 shadow-[0_0_8px_rgba(224,143,78,0.8)]' : 'bg-chassis-950 border-chassis-800'
                  }`}></span>
                  <span className="text-[8px] text-chassis-600 mt-0.5">{7 - idx}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module 3: General Register B */}
        <div className="bg-chassis-900/70 p-4 rounded border border-chassis-800 space-y-3">
          <div className="flex items-center justify-between text-xs border-b border-chassis-800 pb-1">
            <span className="text-bakelite-400 font-bold uppercase">74LS173 REG B</span>
            <span className="text-chassis-200">{regB} (0x{regB.toString(16).toUpperCase().padStart(2, '0')})</span>
          </div>

          <div>
            <span className="text-[10px] text-chassis-600 uppercase block mb-1">8-BIT DATA BITS (D7-D0):</span>
            <div className="flex gap-1 justify-between">
              {toBits(regB).map((bit, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className={`w-3 h-3 rounded-full border ${
                    bit ? 'bg-copper-400 border-copper-300 shadow-[0_0_8px_rgba(224,143,78,0.8)]' : 'bg-chassis-950 border-chassis-800'
                  }`}></span>
                  <span className="text-[8px] text-chassis-600 mt-0.5">{7 - idx}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Module 4: 74LS181 ALU Operations & Flags */}
      <div className="bg-chassis-950 p-4 rounded border border-bakelite-500/40 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs text-bakelite-400 font-bold block mb-1 uppercase">
            74LS181 ALU FUNCTION SELECTOR:
          </span>
          <div className="flex gap-1.5">
            {['ADD', 'SUB', 'AND', 'OR', 'XOR'].map((op) => (
              <button
                key={op}
                onClick={() => {
                  vintageAudio.playSwitch();
                  setAluOp(op);
                }}
                className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                  aluOp === op
                    ? 'bg-bakelite-500/20 text-bakelite-400 border-bakelite-500 font-bold'
                    : 'bg-chassis-900 text-chassis-500 border-chassis-800 hover:text-chassis-200'
                }`}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        {/* ALU Output & Flags */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] text-chassis-600 uppercase block">ALU BUS RESULT:</span>
            <span className="text-base text-chassis-100 font-bold">
              {result} <span className="text-xs text-chassis-500">(0x{result.toString(16).toUpperCase().padStart(2, '0')})</span>
            </span>
          </div>

          <div className="flex items-center gap-2 pl-4 border-l border-chassis-800 text-xs">
            <div className="flex flex-col items-center">
              <span className={`w-3 h-3 rounded-full border ${carry ? 'bg-amber-400 border-amber-300' : 'bg-chassis-900 border-chassis-800'}`}></span>
              <span className="text-[9px] text-chassis-500 mt-0.5">CARRY</span>
            </div>
            <div className="flex flex-col items-center">
              <span className={`w-3 h-3 rounded-full border ${zero ? 'bg-amber-400 border-amber-300' : 'bg-chassis-900 border-chassis-800'}`}></span>
              <span className="text-[9px] text-chassis-500 mt-0.5">ZERO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
