import React, { useState } from 'react';
import { VocabItem } from '../types';

interface FlipCardProps {
  item: VocabItem;
}

export const FlipCard: React.FC<FlipCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Styles logic based on item properties
  let cardBgClass = 'bg-white';
  let textColorClass = 'text-[#1E3A8A]';
  let borderColorClass = 'border-gray-200';
  let inlineStyle: React.CSSProperties = {};

  if (item.color) {
    inlineStyle.backgroundColor = item.color;
    textColorClass = item.text === 'white' ? 'text-white' : 'text-gray-900';
    if (item.border) borderColorClass = 'border-gray-300';
    // Override bg class if color is present
    cardBgClass = '';
  }

  return (
    <div 
      className="group h-48 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full text-center transition-transform duration-500 transform-style-3d shadow-lg rounded-xl border ${borderColorClass} ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-xl ${cardBgClass}`}
          style={inlineStyle}
        >
          {item.icon && <div className="text-4xl mb-2">{item.icon}</div>}
          <h3 className={`text-2xl font-bold ${textColorClass}`}>{item.it}</h3>
          <p className={`text-sm font-semibold mt-1 ${item.color && item.text === 'white' ? 'text-white/80' : 'text-gray-600'}`}>
            {item.es}
          </p>
          <p className="font-mono text-xs mt-1 text-[#3B82F6] uppercase">[{item.pron}]</p>
          
          <div className="absolute bottom-2">
            <span className="bg-[#1E3A8A] text-white text-xs px-3 py-1 rounded-full shadow-md">
              Ver Frase
            </span>
          </div>
          <div className="absolute bottom-3 right-3 text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden rotate-y-180 bg-[#1E3A8A] text-white rounded-xl p-4">
          <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-1">Frase de Ejemplo</p>
          <p className="text-base italic mb-2 font-light text-center">"{item.fraseIt || item.context}"</p>
          
          <p className="font-mono text-xs mt-1 text-[#3B82F6] uppercase">
            [{item.frasePron || 'Pronunciación no disponible'}]
          </p>
          
          <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mt-2 mb-1">(Significado en Español)</p>
          <p className="text-sm font-semibold text-[#FACC15] text-center">"{item.fraseEs || item.context}"</p>
        </div>
      </div>
    </div>
  );
};
