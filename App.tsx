import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomeView } from './components/HomeView';
import { CardsView } from './components/CardsView';
import { QuizView } from './components/QuizView';
import { ViewState, CategoryKey } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [visitedModules, setVisitedModules] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // If navigating to a category, mark as visited
    if (currentView !== 'home' && currentView !== 'quiz') {
      setVisitedModules(prev => {
        const newSet = new Set(prev);
        newSet.add(currentView);
        return newSet;
      });
    }
  }, [currentView]);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (currentView === 'home') return <HomeView />;
    if (currentView === 'quiz') return <QuizView />;
    return <CardsView categoryKey={currentView as CategoryKey} />;
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-[#F4F7F9]">
      {/* Mobile Header */}
      <header className="md:hidden bg-[#1E3A8A] text-white p-4 flex justify-between items-center z-30 shadow-md flex-shrink-0">
        <h1 className="text-xl font-bold">🇺🇸 Léxico Inglés</h1>
        <button 
          className="text-white focus:outline-none text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Sidebar Navigation */}
      <Sidebar 
        currentView={currentView} 
        onNavigate={handleNavigate}
        visitedModules={visitedModules}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative p-4 md:p-8 scroll-smooth">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
