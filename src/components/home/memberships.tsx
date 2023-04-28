import { type FC } from 'react';

import { PageSection, PageSectionTitle } from '@/components/common';

import { cn } from '../../utils/class-names';

const membershipsData = [
  {
    title: 'Silver',
    benefits: {
      room: '15%',
      food: '10%',
      drink: '10%',
      dayVisit: '300 THB',
    },
  },
  {
    title: 'Gold',
    benefits: {
      room: '30%',
      food: '20%',
      drink: '10%',
      dayVisit: '200 THB',
    },
  },
];

export const Memberships: FC = () => {
  return (
    <PageSection variant="light">
      <div className="space-y-8">
        <PageSectionTitle
          center
          subtitle="Dragonfly Naturist Village"
          title="Our Memberships"
        />
        <div className="mx-auto grid max-w-screen-sm gap-4 md:grid-cols-2 md:gap-8">
          {membershipsData.map(
            ({ title, benefits: { room, food, drink, dayVisit } }) => (
              <div key={title} className="grid space-y-4 md:space-y-8">
                <div
                  className={cn(
                    'grid aspect-[3/2] place-items-center rounded-lg',
                    {
                      'bg-slate-800': title === 'Silver',
                      'bg-slate-900': title === 'Gold',
                    }
                  )}
                >
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {title}
                  </h3>
                </div>
                <div
                  className={cn('space-y-8 bg-white px-8 py-16 text-center', {
                    'bg-transparent text-right': title === 'Benefit',
                  })}
                >
                  <div className="space-y-8 text-slate-500">
                    <div>
                      <span>Room Discount</span>
                      <p className="text-xl text-slate-900">{room}</p>
                    </div>
                    <div>
                      <span>Food Discount</span>
                      <p className="text-xl text-slate-900">{food}</p>
                    </div>
                    <div>
                      <span>Drink Discount</span>
                      <p className="text-xl text-slate-900">{drink}</p>
                    </div>
                    <div>
                      <span>Day Visit</span>
                      <p className="text-xl text-slate-900">{dayVisit}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </PageSection>
  );
};
