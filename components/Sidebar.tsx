import React from 'react';
import { DATA } from '../constants';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  visitedModules: Set<string>;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, visitedModules, isOpen, onClose }) => {
  const menuItems = [
    { id: 'home', label: '🏠 Inicio / Dashboard' },
    { id: 'saludos', label: '👋 Saludos y Básicos' },
    { id: 'presentacion', label: '🤝 Presentaciones' },
    { id: 'numeros', label: '🔢 Números (1-10)' },
    { id: 'colores', label: '🎨 Colores' },
    { id: 'animales', label: '🐶 Animales y Casa' },
    { id: 'viajes', label: '✈️ Viajes y Salud' },
    { id: 'clima', label: '☀️ Clima y Tiempo' },
    { id: 'quiz', label: '🧠 Test de Vocabulario' },
  ];

  const totalModules = Object.keys(DATA).length; // 7 actual modules
  const progressPercent = Math.min(100, Math.round((visitedModules.size / totalModules) * 100));

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Container */}
      <nav 
        className={`fixed md:relative z-20 w-64 h-full bg-[#1E3A8A] text-white flex flex-col shadow-xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="p-6 border-b border-[#9CA3AF]/30 hidden md:block">
            <h1 className="text-2xl font-bold tracking-wide">🇺🇸 Inglés<br/><span className="text-sm font-normal text-[#C5D0E3]">para el Uso Diario</span></h1>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1">
                {menuItems.map((item) => {
                   const isActive = currentView === item.id;
                   return (
                     <li key={item.id}>
                        <button 
                          onClick={() => {
                            onNavigate(item.id as ViewState);
                            onClose(); // Close mobile menu on selection
                          }} 
                          className={`w-full text-left px-6 py-3 transition-colors border-l-4 ${isActive ? 'bg-[#3B5998] border-[#3B82F6] font-semibold' : 'hover:bg-[#3B5998] border-transparent'}`}
                        >
                          {item.label}
                        </button>
                     </li>
                   );
                })}
            </ul>
        </div>

        <div className="p-6 bg-[#162954] mt-auto">
            <p className="text-xs text-[#C5D0E3] mb-2">Progreso de sesión</p>
            <div className="w-full bg-[#3B5998] rounded-full h-2.5">
                <div 
                  className="bg-[#3B82F6] h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
            </div>
            <p className="text-xs text-center mt-2 text-[#C5D0E3]">{visitedModules.size}/{totalModules} Temas explorados</p>
        </div>
      </nav>
    </>
  );
};
