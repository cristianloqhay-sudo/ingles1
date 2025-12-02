import React from 'react';
import { DATA } from '../constants';
import { CategoryKey } from '../types';
import { FlipCard } from './FlipCard';

interface CardsViewProps {
  categoryKey: CategoryKey;
}

export const CardsView: React.FC<CardsViewProps> = ({ categoryKey }) => {
  const category = DATA[categoryKey];

  if (!category) return null;

  return (
    <section className="max-w-5xl mx-auto">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-[#1E3A8A]">{category.title}</h2>
        <p className="text-gray-600 mt-2">{category.desc}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, index) => (
          <FlipCard key={`${categoryKey}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};
