import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Copy, Check, QrCode, Heart } from 'lucide-react';
import { vintageAudio } from '../utils/audio';

export const SupportModal = () => {
  const { isSupportOpen, setIsSupportOpen } = useApp();
  const [copied, setCopied] = useState(false);
  const upiId = 'shaoor.retroforge@upi';

  if (!isSupportOpen) return null;

  const handleCopy = () => {
    vintageAudio.playRelayClick();
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={() => setIsSupportOpen(false)}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-chassis-950 border border-chassis-800 rounded-lg max-w-md w-full p-6 space-y-6 shadow-2xl text-chassis-500"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-chassis-800 pb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-copper-400" />
            <h3 className="font-serif text-xl text-chassis-100">Support RetroForge</h3>
          </div>
          <button
            onClick={() => setIsSupportOpen(false)}
            className="p-1 rounded text-chassis-500 hover:text-chassis-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-chassis-300 leading-relaxed font-sans">
          If something here was useful or you just enjoyed following along, you can support this work here. Entirely optional — the write-ups stay free either way.
        </p>

        {/* Clean UPI QR Box */}
        <div className="bg-chassis-900 p-5 rounded border border-chassis-800 flex flex-col items-center space-y-3 text-center">
          <div className="w-40 h-40 bg-white p-3 rounded border border-chassis-700 flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full text-chassis-950 fill-current">
              <path d="M0 0h30v30H0zm4 4h22v22H4zm4 4h14v14H8zM70 0h30v30H70zm4 4h22v22H74zm4 4h14v14H78zM0 70h30v30H0zm4 4h22v22H4zm4 4h14v14H8zM40 10h10v10H40zm10 20h10v10H50zm-10 10h20v10H40zm30 10h10v10H70zm10 20h10v10H80zm-40 0h10v10H40zm10 10h10v10H50zm20 10h20v10H70zm-30 0h10v10H40z" />
              <rect x="42" y="42" width="16" height="16" fill="#E05D4F" />
            </svg>
          </div>
          <span className="text-xs font-mono text-chassis-500">
            Scan via any UPI Application (GPay, PhonePe, Paytm, BHIM)
          </span>
        </div>

        {/* Copy UPI Box */}
        <div className="bg-chassis-950 p-3 rounded border border-chassis-800 flex items-center justify-between">
          <div className="font-mono text-xs text-chassis-200">
            <span className="text-chassis-500 mr-2">UPI:</span>
            {upiId}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono rounded bg-copper-500 hover:bg-copper-400 text-chassis-950 font-bold transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
