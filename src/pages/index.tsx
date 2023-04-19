import { motion } from 'framer-motion';
import { type NextPage } from 'next';

import { AboutUs, OurRooms, Welcome } from '@/components/home';
import { cn } from '@/utils/class-names';

const HomePage: NextPage = () => {
  const sections = ['Facilities', 'Services', 'Membership'];

  return (
    <>
      <Welcome />
      <AboutUs />
      <OurRooms />
      {sections.map((section, index) => (
        <section
          key={section}
          className={cn(
            'grid min-h-[75vh] place-items-center text-center transition-colors duration-300 ease-in-out',
            index % 2 === 0
              ? 'bg-white hover:bg-slate-100'
              : 'bg-slate-200 hover:bg-slate-300'
          )}
        >
          <motion.div
            initial={{ opacity: 0, translateY: 64 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            className="w-full max-w-screen-sm space-y-4 px-4 md:px-0"
          >
            <h2 className="font-serif text-2xl font-bold uppercase">
              {section}
            </h2>
          </motion.div>
        </section>
      ))}
    </>
  );
};

export default HomePage;
