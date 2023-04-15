import { IconPhoneCall, IconPhoto } from '@tabler/icons-react';
import { type NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import welcome from '@/assets/images/welcome.jpg';
import { cn } from '@/utils/class-names';

const HomePage: NextPage = () => {
  const sections = ['Rooms', 'Facilities', 'Services', 'Membership'];

  return (
    <>
      <section className="relative grid h-screen place-items-center bg-gradient-to-b from-black/75 to-black/50 text-center text-white">
        <Image
          src={welcome}
          fill
          alt="Welcome to Dragonfly Naturist Village"
          className="-z-10 object-cover"
        />
        <div className="w-full max-w-screen-lg space-y-4 px-4 md:px-0">
          <p>Welcome to</p>
          <h1 className="font-serif text-4xl font-bold uppercase tracking-widest">
            Dragonfly Naturist Village
          </h1>
        </div>
      </section>
      <section>
        <div className="mx-auto grid w-full max-w-screen-lg gap-4 px-4 py-16 md:grid-cols-2 md:gap-8 md:px-8 md:py-32">
          <div className="order-2 space-y-4 md:order-1">
            <h2 className="font-serif font-bold uppercase tracking-widest">
              Dragonfly Naturist Village
            </h2>
            <h3 className="text-2xl font-semibold text-slate-500">
              <svg
                aria-hidden="true"
                className="h-12 w-12"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              Enjoy the freedom of naturism in a safe and friendly environment
            </h3>
            <div className="space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                unde expedita dignissimos voluptatibus, nobis nam quod culpa
                laudantium maiores minima incidunt, quis aspernatur officiis
                nihil fugit harum, a ea necessitatibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                unde expedita dignissimos voluptatibus, nobis nam quod culpa
                laudantium maiores minima incidunt, quis aspernatur officiis
                nihil fugit harum, a ea necessitatibus?
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <IconPhoneCall size={52} className="text-slate-400" />
              <Link href="tel:+66958904598" className="flex flex-col">
                <span>Reservations</span>
                <span className="text-lg">66 95 890 4598</span>
              </Link>
            </div>
          </div>
          <div className="relative order-1 grid aspect-[3/2] place-items-center bg-slate-300 md:order-2 md:aspect-auto">
            <IconPhoto size={128} className="text-slate-200" />
          </div>
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

export default HomePage;
