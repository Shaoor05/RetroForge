import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PackagePlus, Upload, CheckCircle2, Truck, MapPin, Mail, Sparkles } from 'lucide-react';
import { vintageAudio } from '../utils/audio';

export const JunkIntakeForm = () => {
  const { submitDonation, donations } = useApp();

  const [formData, setFormData] = useState({
    itemName: '',
    symptom: '',
    city: '',
    transit: 'Pickup',
    contactInfo: '',
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      vintageAudio.playSwitch();
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoPreview(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQuickFill = () => {
    vintageAudio.playSwitch();
    setFormData({
      itemName: '1975 Philips 2-Band Portable Radio',
      symptom: 'Faint buzz from speaker when turned on, but tuning dial produces no stations. Volume dial is scratchy.',
      city: 'Pune',
      transit: 'Pickup',
      contactInfo: 'rahul.vintage@example.com / +91 9876543210',
    });
    setPhotoPreview('https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80');
    setPhotoName('philips_radio.jpg');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.itemName.trim() || !formData.symptom.trim() || !formData.contactInfo.trim()) {
      alert('Please fill out the required details.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const ticketId = submitDonation({
        ...formData,
        donorName: formData.contactInfo.split(' ')[0] || 'Friend of RetroForge',
        photoUrl: photoPreview || ''
      });
      setSubmittedTicket(ticketId);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Persuasive Header */}
      <div className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 shadow-chassis-raised space-y-4">
        <div className="flex items-center justify-between border-b border-chassis-800 pb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-copper-400">
            SEND ME YOUR JUNK
          </span>
          <button
            onClick={handleQuickFill}
            className="text-xs font-mono text-chassis-500 hover:text-copper-400 border border-chassis-700 hover:border-copper-500/50 px-2.5 py-1 rounded bg-chassis-950 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-copper-400" />
            <span>Sample Preset</span>
          </button>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-chassis-100">
          Got something old and broken sitting in a cupboard?
        </h1>

        <p className="text-sm text-chassis-300 leading-relaxed font-sans">
          If you've got an old radio, phone, tape player, or similar electronics that doesn't work and you don't know why — that's exactly what I'm looking for. I'll document what's wrong with it, try to bring it back to life, and credit you for finding it when I post the write-up.
        </p>

        <p className="text-xs text-chassis-500 leading-relaxed font-sans">
          No obligation, no charge. If it's local, I can pick it up. If it needs to be shipped, let's talk about cost first.
        </p>
      </div>

      {/* Ticket Success View */}
      {submittedTicket ? (
        <div className="bg-[#171A16] border border-status-fixed/50 rounded-lg p-6 sm:p-8 space-y-6 shadow-chassis-raised">
          <div className="flex items-center gap-3 text-status-fixed">
            <CheckCircle2 className="w-6 h-6" />
            <div>
              <h2 className="font-serif text-2xl text-chassis-100">
                Logged to Bench Queue: #{submittedTicket}
              </h2>
              <span className="text-xs font-mono text-status-fixed">
                THANKS FOR SAVING VINTAGE GEAR // I WILL REACH OUT SHORTLY
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              vintageAudio.playSwitch();
              setSubmittedTicket(null);
            }}
            className="px-4 py-2 bg-chassis-900 border border-chassis-700 hover:border-copper-500 text-copper-400 text-xs font-mono rounded transition-colors cursor-pointer"
          >
            Submit Another Item
          </button>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} className="bg-chassis-900 border border-chassis-800 rounded-lg p-6 sm:p-8 space-y-5 shadow-chassis-raised">
          <h2 className="font-serif text-xl text-chassis-100 border-b border-chassis-800 pb-2">
            Tell me about it:
          </h2>

          {/* Field 1: What is it? */}
          <div className="space-y-1">
            <label htmlFor="itemName" className="block text-xs font-mono text-chassis-200">
              1. What is it? (name, brand, rough age if you know it) *
            </label>
            <input
              id="itemName"
              type="text"
              required
              placeholder="e.g. 1950s Murphy Valve Radio, 1980s Sony Walkman"
              value={formData.itemName}
              onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
              className="w-full bg-chassis-950 border border-chassis-700 rounded px-3 py-2 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-sans"
            />
          </div>

          {/* Field 2: What's wrong with it? */}
          <div className="space-y-1">
            <label htmlFor="symptom" className="block text-xs font-mono text-chassis-200">
              2. What's wrong with it? (won't turn on, no sound, etc.) *
            </label>
            <textarea
              id="symptom"
              required
              rows="3"
              placeholder="Describe symptoms: completely dead, hums, mechanical tape transport jammed, smoke, etc."
              value={formData.symptom}
              onChange={(e) => setFormData({ ...formData, symptom: e.target.value })}
              className="w-full bg-chassis-950 border border-chassis-700 rounded p-3 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-sans"
            ></textarea>
          </div>

          {/* Field 3: Photo upload */}
          <div className="space-y-1">
            <span className="block text-xs font-mono text-chassis-200">
              3. A photo, if you can
            </span>
            <div className="border border-dashed border-chassis-700 rounded-lg p-4 bg-chassis-950/60 text-center relative hover:border-copper-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                aria-label="Upload device photo"
              />
              {photoPreview ? (
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-28 h-20 object-cover rounded border border-chassis-700"
                  />
                  <span className="text-xs font-mono text-copper-400">{photoName || 'Photo Attached'}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <Upload className="w-5 h-5 text-chassis-500" />
                  <span className="text-xs text-chassis-400 font-mono">Upload photo (optional)</span>
                </div>
              )}
            </div>
          </div>

          {/* Field 4: City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="city" className="block text-xs font-mono text-chassis-200">
                4. Your city *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-chassis-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="city"
                  type="text"
                  required
                  placeholder="e.g. Pune, Mumbai, Delhi"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-2 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Field 5: Transit preference */}
            <div className="space-y-1">
              <label htmlFor="transit" className="block text-xs font-mono text-chassis-200">
                5. Drop-off or Pickup/Shipping?
              </label>
              <div className="relative">
                <Truck className="w-4 h-4 text-chassis-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  id="transit"
                  value={formData.transit}
                  onChange={(e) => setFormData({ ...formData, transit: e.target.value })}
                  className="w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-2 text-sm text-chassis-100 focus:border-copper-500 focus:outline-none font-mono"
                >
                  <option value="Pickup">Local Pickup (I can come pick it up)</option>
                  <option value="Drop-off">I can drop it off</option>
                  <option value="Shipping">Needs shipping (let's talk about cost)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Field 6: How to reach you */}
          <div className="space-y-1">
            <label htmlFor="contactInfo" className="block text-xs font-mono text-chassis-200">
              6. How to reach you (Email or Phone/WhatsApp) *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-chassis-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="contactInfo"
                type="text"
                required
                placeholder="email@domain.com or +91..."
                value={formData.contactInfo}
                onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                className="w-full bg-chassis-950 border border-chassis-700 rounded pl-9 pr-3 py-2 text-sm text-chassis-100 placeholder-chassis-600 focus:border-copper-500 focus:outline-none font-mono"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-3 border-t border-chassis-800 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-chassis-950 font-mono text-xs font-bold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <PackagePlus className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
