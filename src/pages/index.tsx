import { type NextPage } from 'next';
import Image from 'next/image';

import welcome from '@/assets/images/welcome.jpg';
import { cn } from '@/utils/class-names';
import { openSans, playfairDisplay } from '@/utils/fonts';

const Home: NextPage = () => {
  return (
    <div
      className={cn(
        playfairDisplay.variable,
        openSans.variable,
        'relative font-sans'
      )}
    >
      <main>
        <section className="relative grid h-screen place-items-center bg-gradient-to-b from-black/75 to-black/50 text-center text-white">
          <Image
            src={welcome}
            fill
            alt="Welcome to Dragonfly Naturist Village"
            className="-z-10 object-cover"
          />
          <div className="w-full max-w-screen-sm space-y-4">
            <p>Welcome to</p>
            <h1 className="font-serif text-4xl font-bold uppercase">
              Dragonfly Naturist Village
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
