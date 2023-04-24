import { useEffect, useRef, useState, type FC } from 'react';
import Image from 'next/image';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import room from '@/assets/images/room.jpg';
import { PageSection } from '@/components/common';
import { cn } from '@/utils/class-names';

export const OurRooms: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxScrollWidth = useRef(0);
  const carousel = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (
      carousel.current?.offsetWidth &&
      carousel.current?.offsetWidth * activeIndex <
        (maxScrollWidth.current ?? 0)
    ) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const shouldHidden = ({ direction }: { direction: 'prev' | 'next' }) => {
    if (direction === 'prev') {
      return activeIndex <= 0;
    }

    if (direction === 'next' && carousel.current?.offsetWidth) {
      return (
        carousel.current.offsetWidth * activeIndex >=
        (maxScrollWidth.current ?? 0)
      );
    }

    return false;
  };

  useEffect(() => {
    const current = carousel.current;

    if (current) {
      current.scrollLeft = current.offsetWidth * activeIndex;
    }

    return () => {
      if (current) {
        current.scrollLeft = 0;
      }
    };
  }, [activeIndex]);

  useEffect(() => {
    if (carousel.current) {
      maxScrollWidth.current =
        carousel.current.scrollWidth - carousel.current.offsetWidth;
    }
  }, []);

  return (
    <PageSection variant="white">
      <div className="space-y-8">
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

        <div className="relative overflow-hidden">
          <button
            type="button"
            onClick={handlePrev}
            className={cn(
              'absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-center text-white transition-all duration-300 ease-in-out hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white',
              {
                hidden: shouldHidden({ direction: 'prev' }),
              }
            )}
          >
            <IconChevronLeft />
            <span className="sr-only">Prev</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={cn(
              'absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-center text-white transition-all duration-300 ease-in-out hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white',
              {
                hidden: shouldHidden({ direction: 'next' }),
              }
            )}
          >
            <IconChevronRight />
            <span className="sr-only">Next</span>
          </button>

          <div
            ref={carousel}
            className="carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-hidden scroll-smooth"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="relative flex aspect-[3/4] w-[calc(100%-4rem)] shrink-0 snap-start flex-col justify-end bg-gradient-to-t from-black/75 to-black/50 sm:w-[calc((100%-5rem)/2)] md:w-[calc((100%-6rem)/3)] lg:w-[calc((100%-3rem)/4)]"
              >
                <Image
                  src={room}
                  fill
                  alt={`Room ${index + 1}`}
                  className="-z-10 object-cover"
                />
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
        </div>
      </div>
    </PageSection>
  );
};
