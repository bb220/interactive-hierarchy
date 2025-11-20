import React from 'react';
import { LevelData } from '../types';
import { ChevronRight } from 'lucide-react';

interface PyramidLevelProps {
  data: LevelData;
  isSelected: boolean;
  onClick: (id: LevelData['id']) => void;
}

export const PyramidLevel: React.FC<PyramidLevelProps> = ({ data, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(data.id)}
      style={{ 
        width: data.widthPercent,
      }}
      className={`
        relative group flex items-center justify-center h-10 sm:h-12 mb-1 rounded-sm
        transition-all duration-300 ease-out transform 
        ${data.colorClass} ${data.hoverClass}
        ${isSelected ? 'scale-[1.02] z-10 shadow-xl brightness-110 ring-2 ring-black/10' : 'opacity-90 hover:opacity-100 hover:scale-[1.01]'}
        shadow-sm cursor-pointer text-white font-bold tracking-wide text-xs sm:text-sm
        focus:outline-none select-none
      `}
    >
      <span className="drop-shadow-md truncate px-2">
        {data.name}
      </span>
      
      {isSelected && (
        <div className="absolute right-2 sm:right-4 animate-pulse hidden sm:block">
          <ChevronRight className="w-4 h-4 text-white/90" />
        </div>
      )}
    </button>
  );
};