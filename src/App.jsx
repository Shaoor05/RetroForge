import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { BenchView } from './components/BenchView';
import { BuildDetailView } from './components/BuildDetailView';
import { LogView } from './components/LogView';
import { JunkIntakeForm } from './components/JunkIntakeForm';
import { AboutView } from './components/AboutView';
import { RepairDetailModal } from './components/RepairDetailModal';
import { SupportModal } from './components/SupportModal';
import { AdminBar } from './components/AdminBar';
import { AdminAuthModal } from './components/AdminAuthModal';
import { ContentEditorModal } from './components/ContentEditorModal';

export const App = () => {
  const { activeTab } = useApp();

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'bench':
        return <BenchView />;
      case 'builds':
        return <BuildDetailView />;
      case 'log':
        return <LogView />;
      case 'junk':
        return <JunkIntakeForm />;
      case 'about':
        return <AboutView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-copper-500/30 selection:text-chassis-100 relative">
      {/* Top Scanline / Vintage CRT subtle texture overlay */}
      <div className="fixed inset-0 crt-overlay opacity-30 pointer-events-none z-50"></div>

      <div>
        {/* Navigation */}
        <Navbar />

        {/* Live Admin CMS Bar (Visible only when logged in) */}
        <AdminBar />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-opacity duration-300">
          {renderActiveSection()}
        </main>
      </div>

      {/* Global Modals */}
      <RepairDetailModal />
      <SupportModal />
      <AdminAuthModal />
      <ContentEditorModal />

      {/* Footer */}
      <Footer />
    </div>
  );
};
