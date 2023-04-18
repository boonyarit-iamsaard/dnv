import { type FC } from 'react';

import { motion } from 'framer-motion';

export const OurRooms: FC = () => {
  return (
    <section className="bg-slate-100 py-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, translateY: 64 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="mx-auto w-full max-w-screen-lg space-y-8 px-4 md:px-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4 px-4 md:px-0">
            <h2 className="uppercase tracking-widest text-slate-700">
              Dragonfly Naturist Village
            </h2>
            <h3 className="font-serif text-4xl font-bold">Our Rooms</h3>
            <p className="text-lg text-slate-700">
              We make sure that you have a comfortable stay with us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative flex aspect-[3/4] flex-col justify-end bg-gradient-to-t from-black/75 to-black/50"
            >
              {/* TODO: Add image */}
              <div className="space-y-2 p-4 text-white">
                <h3 className="font-serif text-xl font-bold uppercase">
                  Room {index + 1}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quia.
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
