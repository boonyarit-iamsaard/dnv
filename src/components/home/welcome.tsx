import { type FC } from 'react';

import Image from 'next/image';

import welcome from '@/assets/images/welcome.jpg';
import { AnimateFadeIn, AnimateInView } from '@/components/animate';

export const Welcome: FC = () => {
  return (
    <section className="relative grid h-screen place-items-center bg-gradient-to-b from-black/75 to-black/50 text-center text-white">
      <Image
        src={welcome}
        fill
        alt="Welcome to Dragonfly Naturist Village"
        className="-z-10 object-cover"
      />
      <AnimateInView>
        <AnimateFadeIn>
          <div className="w-full max-w-screen-lg space-y-4 px-4 md:px-0">
            <p className="uppercase md:text-xl">Welcome to</p>
            <h1 className="font-serif text-4xl font-bold uppercase tracking-widest">
              Dragonfly Naturist Village
            </h1>
          </div>
        </AnimateFadeIn>
      </AnimateInView>
    </section>
  );
};
