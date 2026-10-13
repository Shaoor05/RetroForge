import React, { createContext, useContext, useState, useEffect } from 'react';
import { repairsData as defaultRepairsData } from '../data/repairsData';
import { aboutData as defaultAboutData } from '../data/aboutData';
import { buildsData as defaultBuildsData } from '../data/buildsData';
import { logData as defaultLogData } from '../data/logData';
import { vintageAudio } from '../utils/audio';

const AppContext = createContext();

const INITIAL_COMMENTS = {
  'murphy-mini-master-4': [
    {
      id: 'c1',
      author: 'VU2SDR',
      date: 'Sep 18, 2024',
      text: 'Those Murphy India Sinus chassis had the best IF sensitivity of their era. Brilliant job re-peaking the 455 kHz transformers!'
    }
  ],
  'philips-portable-radio': [
    {
      id: 'c2',
      author: 'Kester6337',
      date: 'Sep 20, 2024',
      text: 'Transformer hinge wire fatigue is such a common failure in clamshell models. Adding strain relief prevents it permanently.'
    }
  ]
};

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedRepairId, setSelectedRepairId] = useState(null);
  const [selectedBuildId, setSelectedBuildId] = useState(null);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('retroforge_muted') === 'true';
  });

  // Dynamic Content State with LocalStorage persistence
  const [repairs, setRepairs] = useState(() => {
    try {
      const saved = localStorage.getItem('retroforge_custom_repairs');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return defaultRepairsData;
  });

  const [about, setAbout] = useState(() => {
    try {
      const saved = localStorage.getItem('retroforge_custom_about');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return defaultAboutData;
  });

  const [builds, setBuilds] = useState(() => {
    try {
      const saved = localStorage.getItem('retroforge_custom_builds');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return defaultBuildsData;
  });

  const [logs, setLogs] = useState(() => {
    try {
      const saved = localStorage.getItem('retroforge_custom_logs');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return defaultLogData;
  });

  // Admin CMS Mode State
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('retroforge_is_admin') === 'true';
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);
  const [editorTarget, setEditorTarget] = useState({ type: 'repair', id: null, data: null });

  // Filters for The Bench
  const [filterDecade, setFilterDecade] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Likes state
  const [likes, setLikes] = useState(() => {
    try {
      const saved = localStorage.getItem('retroforge_likes');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    const initial = {};
    repairs.forEach(item => {
      initial[item.id] = {
        count: item.initialLikes || 20,
        userLiked: false
      };
    });
    return initial;
  });

  // Comments state
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem('retroforge_comments');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return INITIAL_COMMENTS;
  });

  // Intake Donations state
  const [donations, setDonations] = useState(() => {
    try {
      const saved = localStorage.getItem('retroforge_donations');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [
      {
        id: 'TKT-8902',
        date: '2024-09-12',
        itemName: '1972 Philips Stereo Cassette Recorder',
        condition: 'Belts melted, heads dirty, power cord intact',
        city: 'Pune',
        transit: 'Local bench pickup',
        donorName: 'Arjun M.',
        status: 'Received & Queued'
      }
    ];
  });

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('retroforge_custom_repairs', JSON.stringify(repairs));
    } catch (e) {}
  }, [repairs]);

  useEffect(() => {
    try {
      localStorage.setItem('retroforge_custom_about', JSON.stringify(about));
    } catch (e) {}
  }, [about]);

  useEffect(() => {
    try {
      localStorage.setItem('retroforge_custom_builds', JSON.stringify(builds));
    } catch (e) {}
  }, [builds]);

  useEffect(() => {
    try {
      localStorage.setItem('retroforge_custom_logs', JSON.stringify(logs));
    } catch (e) {}
  }, [logs]);

  useEffect(() => {
    try {
      localStorage.setItem('retroforge_is_admin', isAdmin ? 'true' : 'false');
    } catch (e) {}
  }, [isAdmin]);

  useEffect(() => {
    try {
      localStorage.setItem('retroforge_likes', JSON.stringify(likes));
    } catch (e) {}
  }, [likes]);

  useEffect(() => {
    try {
      localStorage.setItem('retroforge_comments', JSON.stringify(comments));
    } catch (e) {}
  }, [comments]);

  useEffect(() => {
    try {
      localStorage.setItem('retroforge_donations', JSON.stringify(donations));
    } catch (e) {}
  }, [donations]);

  // Admin Actions
  const loginAdmin = (password) => {
    // Accepts 'admin', 'retroforge', or any non-empty password
    if (password.trim().toLowerCase() === 'admin' || password.trim().toLowerCase() === 'retroforge' || password.trim() === '1234') {
      vintageAudio.playRelayClick();
      setIsAdmin(true);
      setIsAuthModalOpen(false);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    vintageAudio.playSwitch();
    setIsAdmin(false);
    setIsEditorModalOpen(false);
  };

  const openEditor = (type, id = null, initialData = null) => {
    vintageAudio.playSwitch();
    let dataToEdit = initialData;
    if (!dataToEdit && id) {
      if (type === 'repair') dataToEdit = repairs.find(r => r.id === id);
      if (type === 'build') dataToEdit = builds.find(b => b.id === id);
      if (type === 'log') dataToEdit = logs.find(l => l.id === id);
    }
    if (type === 'about') dataToEdit = about;

    setEditorTarget({ type, id, data: dataToEdit });
    setIsEditorModalOpen(true);
  };

  const closeEditor = () => {
    vintageAudio.playSwitch();
    setIsEditorModalOpen(false);
    setEditorTarget({ type: 'repair', id: null, data: null });
  };

  const saveEditedContent = (type, id, updatedData) => {
    vintageAudio.playRelayClick();
    if (type === 'repair') {
      if (id) {
        setRepairs(prev => prev.map(item => item.id === id ? { ...item, ...updatedData } : item));
      } else {
        const newId = 'repair-' + Date.now();
        const newRecord = { id: newId, initialLikes: 1, ...updatedData };
        setRepairs(prev => [newRecord, ...prev]);
        setSelectedRepairId(newId);
      }
    } else if (type === 'about') {
      setAbout(prev => ({ ...prev, ...updatedData }));
    } else if (type === 'build') {
      if (id) {
        setBuilds(prev => prev.map(item => item.id === id ? { ...item, ...updatedData } : item));
      } else {
        const newId = 'build-' + Date.now();
        setBuilds(prev => [{ id: newId, ...updatedData }, ...prev]);
      }
    } else if (type === 'log') {
      if (id) {
        setLogs(prev => prev.map(item => item.id === id ? { ...item, ...updatedData } : item));
      } else {
        const newId = 'log-' + Date.now();
        setLogs(prev => [{ id: newId, date: new Date().toISOString().split('T')[0], ...updatedData }, ...prev]);
      }
    }
    closeEditor();
  };

  const deleteRepair = (id) => {
    if (window.confirm('Delete this teardown log permanently from your bench?')) {
      vintageAudio.playRelayClick();
      setRepairs(prev => prev.filter(r => r.id !== id));
      if (selectedRepairId === id) setSelectedRepairId(null);
    }
  };

  const resetToDefaults = () => {
    if (window.confirm('Reset all content (repairs, about bio, photos) back to factory stock defaults?')) {
      vintageAudio.playRelayClick();
      setRepairs(defaultRepairsData);
      setAbout(defaultAboutData);
      setBuilds(defaultBuildsData);
      setLogs(defaultLogData);
      localStorage.removeItem('retroforge_custom_repairs');
      localStorage.removeItem('retroforge_custom_about');
      localStorage.removeItem('retroforge_custom_builds');
      localStorage.removeItem('retroforge_custom_logs');
    }
  };

  const toggleLike = (id) => {
    vintageAudio.playRelayClick();
    setLikes(prev => {
      const current = prev[id] || { count: 0, userLiked: false };
      const userLiked = !current.userLiked;
      const count = userLiked ? current.count + 1 : Math.max(0, current.count - 1);
      return {
        ...prev,
        [id]: { count, userLiked }
      };
    });
  };

  const addComment = (repairId, author, text) => {
    if (!text.trim()) return;
    vintageAudio.playSwitch();
    const newComment = {
      id: 'c_' + Date.now(),
      author: author.trim() || 'Anonymous Explorer',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      text: text.trim()
    };
    setComments(prev => ({
      ...prev,
      [repairId]: [newComment, ...(prev[repairId] || [])]
    }));
  };

  const submitDonation = (formData) => {
    vintageAudio.playRelayClick();
    const ticketId = 'TKT-' + Math.floor(1000 + Math.random() * 9000);
    const newEntry = {
      id: ticketId,
      date: new Date().toISOString().split('T')[0],
      ...formData,
      status: 'Intake Logged / Awaiting Dispatch'
    };
    setDonations(prev => [newEntry, ...prev]);
    return ticketId;
  };

  const toggleSound = () => {
    const muted = vintageAudio.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      vintageAudio.playSwitch();
    }
  };

  const navigateTo = (tab, params = {}) => {
    vintageAudio.playSwitch();
    setActiveTab(tab);
    if (params.repairId !== undefined) setSelectedRepairId(params.repairId);
    if (params.buildId !== undefined) setSelectedBuildId(params.buildId);
    if (params.decade) setFilterDecade(params.decade);
    if (params.category) setFilterCategory(params.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openRepairModal = (id) => {
    vintageAudio.playSwitch();
    setSelectedRepairId(id);
  };

  const closeRepairModal = () => {
    vintageAudio.playSwitch();
    setSelectedRepairId(null);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        navigateTo,
        repairs,
        about,
        builds,
        logs,
        isAdmin,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isEditorModalOpen,
        editorTarget,
        loginAdmin,
        logoutAdmin,
        openEditor,
        closeEditor,
        saveEditedContent,
        deleteRepair,
        resetToDefaults,
        selectedRepairId,
        openRepairModal,
        closeRepairModal,
        selectedBuildId,
        setSelectedBuildId,
        isSupportOpen,
        setIsSupportOpen,
        isMuted,
        toggleSound,
        filterDecade,
        setFilterDecade,
        filterCategory,
        setFilterCategory,
        searchQuery,
        setSearchQuery,
        likes,
        toggleLike,
        comments,
        addComment,
        donations,
        submitDonation
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

