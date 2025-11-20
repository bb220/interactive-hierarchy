import React from 'react';
import { LevelData } from '../types';

interface InfoCardProps {
  level: LevelData;
}

export const InfoCard: React.FC<InfoCardProps> = ({ level }) => {
  return (
    <div className="animate-fade-in mb-8">
        <div className="flex flex-col gap-2 mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Selected Level
            </span>
            <div className="flex items-baseline gap-3">
                <h2 className="text-4xl md:text-5xl font-black text-slate-400">
                    {level.id}
                </h2>
            </div>
            <h3 className={`text-2xl md:text-4xl font-bold text-slate-900`}>
                 {level.name}
            </h3>
        </div>
      
      <div className={`h-1.5 w-20 rounded-full mb-6 ${level.colorClass}`}></div>
      
      <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light mb-8">
        {level.summary}
      </p>
    </div>
  );
};