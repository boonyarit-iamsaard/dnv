import { type FC } from 'react';

import welcome from '@/assets/images/welcome.jpg';
import { PageSection } from '@/components/common';

export const Welcome: FC = () => {
  const backgroundImg = {
    src: welcome,
    alt: 'Welcome to Dragonfly Naturist Village',
  };

  return (
    <PageSection withBackgroundImage size="full" backgroundImg={backgroundImg}>
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase md:text-xl">Welcome to</p>
        <h1 className="font-serif text-xl font-bold uppercase tracking-widest md:text-4xl">
          Dragonfly Naturist Village
        </h1>
      </div>
    </PageSection>
  );
};
