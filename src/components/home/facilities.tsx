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
    icon: <IconSwimming size={64} />,
  },
  {
    title: 'Room Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconHotelService size={64} />,
  },
  {
    title: 'Dining',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconSoup size={64} />,
  },
  {
    title: 'Wifi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconWifi size={64} />,
  },
  {
    title: 'Parking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconParking size={64} />,
  },
  {
    title: 'Gym',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia!',
    icon: <IconBarbell size={64} />,
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
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map(({ title, description, icon }) => (
            <div
              key={title}
              className="flex flex-col justify-end border border-slate-200 px-4 py-8 text-slate-500"
            >
              <div className="space-y-4">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};
