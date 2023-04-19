import { type FC } from 'react';

import { motion } from 'framer-motion';

export const AboutUs: FC = () => {
  return (
    <section className="py-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, translateY: 64 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="mx-auto grid w-full max-w-screen-lg gap-4 px-4 md:grid-cols-2 md:gap-8 md:px-8"
      >
        <div className="order-2 space-y-4 md:order-1">
          <div className="space-y-4 px-4 md:px-0 md:py-8">
            <h2 className="uppercase tracking-widest text-slate-500">
              Dragonfly Naturist Village
            </h2>
            <h3 className="font-serif text-4xl font-bold">About Us</h3>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde
              expedita dignissimos voluptatibus, nobis nam quod culpa laudantium
              maiores minima incidunt, quis aspernatur officiis nihil fugit
              harum, a ea necessitatibus?
            </p>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde
              expedita dignissimos voluptatibus, nobis nam quod culpa laudantium
              maiores minima incidunt, quis aspernatur officiis nihil fugit
              harum, a ea necessitatibus?
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-black px-4 py-2 text-lg uppercase text-white ring-1 ring-slate-900 transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-900"
            >
              Book your stay
            </button>
          </div>
        </div>
        <div className="relative order-1 flex aspect-[3/2] items-end bg-gradient-to-t from-black/75 to-black/50 p-2 md:order-2 md:aspect-auto md:p-4">
          <h3 className="relative p-2 text-xl font-semibold text-white md:p-4 md:text-2xl">
            <svg
              aria-hidden="true"
              className="absolute left-0 top-0 h-10 w-10 md:h-12 md:w-12"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                className="fill-white/25"
              />
            </svg>
            Enjoy the freedom of naturism in a safe and friendly environment
          </h3>
        </div>
      </motion.div>
    </section>
  );
};
