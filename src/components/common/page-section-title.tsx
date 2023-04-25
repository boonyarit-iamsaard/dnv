import { type FC } from 'react';

import { cn } from '@/utils/class-names';

interface PageSectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export const PageSectionTitle: FC<PageSectionTitleProps> = ({
  title,
  subtitle,
  className,
  center,
}) => {
  return (
    <div
      className={cn('section-title space-y-4', className, {
        'text-center': center,
      })}
    >
      {subtitle && (
        <p className="uppercase tracking-widest text-slate-500">{subtitle}</p>
      )}
      <h2 className="font-serif text-4xl font-bold">{title}</h2>
    </div>
  );
};
