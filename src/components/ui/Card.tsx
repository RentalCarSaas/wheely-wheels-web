
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  flip?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  flip = false,
  style
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-2' : '';
  const flipClasses = flip ? 'group perspective-1000' : '';

  return (
    <div className={cn(baseClasses, hoverClasses, flipClasses, className)} style={style}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={cn('p-6', className)}>
    {children}
  </div>
);

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={cn('p-6 pb-0', className)}>
    {children}
  </div>
);
