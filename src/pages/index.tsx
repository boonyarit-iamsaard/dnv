import { type NextPage } from 'next';

import { Introduction, Welcome } from '@/components/home';
import { cn } from '@/utils/class-names';

const HomePage: NextPage = () => {
  const sections = ['Rooms', 'Facilities', 'Services', 'Membership'];

  return (
    <>
      <Welcome />
      <Introduction />

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
          <div className="w-full max-w-screen-sm space-y-4 px-4 md:px-0">
            <h2 className="font-serif text-2xl font-bold uppercase">
              {section}
            </h2>
          </div>
        </section>
      ))}
    </>
  );
};

export default HomePage;
