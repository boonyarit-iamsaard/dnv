import { type FC } from 'react';

import {
  IconBarbell,
  IconHotelService,
  IconParking,
  IconSoup,
  IconSwimming,
  IconWifi,
} from '@tabler/icons-react';

import { PageSection, PageSectionTitle } from '@/components/common';

const facilities = [
  {
    title: 'Swimming Pool',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconSwimming size={64} stroke={1} />,
  },
  {
    title: 'Room Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconHotelService size={64} stroke={1} />,
  },
  {
    title: 'Dining',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconSoup size={64} stroke={1} />,
  },
  {
    title: 'Wifi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconWifi size={64} stroke={1} />,
  },
  {
    title: 'Parking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconParking size={64} stroke={1} />,
  },
  {
    title: 'Gym',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconBarbell size={64} stroke={1} />,
  },
];

export const Facilities: FC = () => {
  return (
    <PageSection>
      <div className="space-y-8">
        <PageSectionTitle
          subtitle="Dragonfly Naturist Village"
          title="Our Services and Facilities"
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {facilities.map(({ title, description, icon }) => (
            <div
              key={title}
              className="flex flex-col justify-end border border-slate-100 px-4 py-8 text-slate-500"
            >
              <div className="space-y-4">
                {icon}
                <h3 className="text-2xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};
