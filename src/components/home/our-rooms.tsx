import { type FC, type HTMLAttributes } from 'react';
import Image from 'next/image';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import room from '@/assets/images/room.jpg';
import { PageSection } from '@/components/common';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// TODO: Move to a separate file
export const button = cva(
  [
    'swiper-navigation-button',
    'absolute inset-y-0',
    'z-30',
    'flex items-center',
    'px-2',
    'bg-transparent text-white hover:bg-black/50',
  ],
  {
    variants: {
      direction: {
        prev: ['left-0'],
        next: ['right-0'],
      },
    },
    defaultVariants: {},
  }
);

export interface SwiperNavigationButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  direction: 'prev' | 'next';
}

export const SwiperNavigationButton: FC<SwiperNavigationButtonProps> = ({
  direction,
  className,
  ...props
}) => {
  const swiper = useSwiper();

  const label = direction === 'prev' ? 'Previous' : 'Next';

  // TODO: Implement hidden prop

  return (
    <button
      aria-label={label}
      className={button({
        className,
        direction,
      })}
      onClick={() =>
        direction === 'prev' ? swiper.slidePrev() : swiper.slideNext()
      }
      type="button"
      {...props}
    >
      {direction === 'prev' ? <IconChevronLeft /> : <IconChevronRight />}
    </button>
  );
};

export const OurRooms: FC = () => {
  const roomTypes = [
    {
      type: 'Suite',
    },
    {
      type: 'Mini Suite',
    },
    {
      type: 'Deluxe',
      sub: '1st Floor',
    },
    {
      type: 'Deluxe',
      sub: '2nd Floor',
    },
  ];

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

        <div className="relative">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.25}
            breakpoints={{
              600: {
                slidesPerView: 2.25,
              },
              900: {
                slidesPerView: 3.25,
              },
              1200: {
                slidesPerView: roomTypes.length > 4 ? 4.25 : 4,
              },
            }}
            className="relative"
          >
            {roomTypes.map(({ type, sub }, index) => (
              <SwiperSlide key={index}>
                <div className="group relative mb-8 flex aspect-[3/4] w-full flex-col justify-end overflow-hidden bg-gradient-to-tr from-black/75 to-black/50">
                  <Image
                    alt={type}
                    src={room}
                    fill
                    // TODO: Research more about this
                    sizes="(min-width: 1200px) 35vw, (min-width: 900px) 45vw, (min-width: 600px) 65vw, 100vw"
                    className="-z-10 object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm"
                  />
                  <div className="space-y-2 p-4 text-white">
                    {sub && (
                      <span className="inline-block bg-white/20 px-2 py-1 text-sm leading-none">
                        {sub}
                      </span>
                    )}
                    <h3 className="flex items-center gap-4">
                      <span className="block font-serif text-2xl font-bold uppercase">
                        {type}
                      </span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quia.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavigationButton direction="prev" className="bottom-8" />
            <SwiperNavigationButton direction="next" className="bottom-8" />
            {/* TODO: Imprement custom pagination */}
          </Swiper>
        </div>
      </div>
    </PageSection>
  );
};
