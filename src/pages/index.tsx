import { type NextPage } from 'next';
import Image from 'next/image';

import welcome from '@/assets/images/welcome.jpg';
import { cn } from '@/utils/class-names';

const Home: NextPage = () => {
  const sections = [
    'Introduction',
    'Rooms',
    'Facilities',
    'Services',
    'Membership',
    'Contact',
  ];

  return (
    <>
      <section className="relative grid h-screen place-items-center bg-gradient-to-b from-black/75 to-black/50 text-center text-white">
        <Image
          src={welcome}
          fill
          alt="Welcome to Dragonfly Naturist Village"
          className="-z-10 object-cover"
        />
        <div className="w-full max-w-screen-sm space-y-4 px-4 md:px-0">
          <p>Welcome to</p>
          <h1 className="font-serif text-4xl font-bold uppercase">
            Dragonfly Naturist Village
          </h1>
        </div>
      </section>
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

export default Home;
