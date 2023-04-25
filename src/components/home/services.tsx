import { type FC } from 'react';

import { PageSection, PageSectionTitle } from '@/components/common';

export const Services: FC = () => {
  return (
    <PageSection variant="light">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <div className="order-2 space-y-4">
          <div className="space-y-4 px-4 md:px-0 md:py-8">
            <PageSectionTitle
              subtitle="Dragonfly Naturist Village"
              title="Riva Waree Onsen"
            />
            <p className="text-slate-500">
              Dragonfly has the most natural Onsen in Thailand. One where you
              can relax, recharge and rejuvenate yourself. Three welcoming pools
              of different temperatures, a large relaxing area and a restaurant
              and bar area are available. You can come as a Day Visitor to Riva
              Waree, and all the other facilities at Dragonfly are also free to
              use.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-black px-4 py-2 text-lg font-semibold uppercase text-white ring-1 ring-slate-900 transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-900"
            >
              More
            </button>
          </div>
        </div>
        <div className="relative order-1 flex aspect-[3/2] items-end bg-gradient-to-t from-black/75 to-black/50 p-2 md:aspect-auto md:p-4">
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
            It is everything you have heard and so much more.
          </h3>
        </div>
      </div>
    </PageSection>
  );
};
